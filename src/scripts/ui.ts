type ThemePref = 'system' | 'light' | 'dark';

declare global {
  interface Window {
    __theme: { get(): ThemePref; set(pref: ThemePref): void };
  }
}

const isMac = /Mac|iPhone|iPad/.test(navigator.platform);

const $ = <T extends HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

/* Theme -------------------------------------------------------------- */
function cycleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  window.__theme.set(isDark ? 'light' : 'dark');
  syncThemeLabel();
}

function syncThemeLabel() {
  const isDark = document.documentElement.classList.contains('dark');
  $$('[data-theme-toggle]').forEach((b) => b.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`));
}

/* Mobile menu -------------------------------------------------------- */
function setMenu(open: boolean) {
  const menu = $('#mobile-menu');
  const toggle = $('[data-menu-toggle]');
  if (!menu || !toggle) return;
  menu.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.documentElement.style.overflow = open ? 'hidden' : '';
}

function menuIsOpen() {
  return $('#mobile-menu')?.hidden === false;
}

function trapFocus(e: KeyboardEvent) {
  const header = $('header');
  if (!header) return;
  const focusables = $$<HTMLElement>('a[href], button', header).filter((el) => el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

/* Copy to clipboard -------------------------------------------------- */
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.append(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  }
}

const copyTimers = new WeakMap<HTMLElement, number>();

async function handleCopy(btn: HTMLElement) {
  const text = btn.dataset.copy ?? '';
  const label = $('[data-copy-label]', btn);
  const status = $('[data-copy-status]', btn);
  const original = text;
  const ok = await copyText(text);
  if (label) label.textContent = ok ? 'Copied to clipboard' : 'Copy failed - select manually';
  if (status) status.textContent = ok ? 'Email address copied to clipboard' : 'Copy failed';
  clearTimeout(copyTimers.get(btn));
  copyTimers.set(
    btn,
    window.setTimeout(() => {
      if (label) label.textContent = original;
      if (status) status.textContent = '';
    }, 2000),
  );
}

/* Command palette ---------------------------------------------------- */
const palette = () => $<HTMLDialogElement>('[data-palette]');

function paletteItems() {
  return $$<HTMLElement>('[data-palette-item]', palette()!).filter((el) => !el.hidden);
}

function setActive(index: number) {
  const items = paletteItems();
  const input = $<HTMLInputElement>('[data-palette-input]');
  items.forEach((el, i) => el.setAttribute('aria-selected', String(i === index)));
  const active = items[index];
  if (active) {
    input?.setAttribute('aria-activedescendant', active.id);
    active.scrollIntoView({ block: 'nearest' });
  } else {
    input?.removeAttribute('aria-activedescendant');
  }
}

function filterPalette(query: string) {
  const dlg = palette();
  if (!dlg) return;
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  $$('[data-palette-item]', dlg).forEach((el) => {
    const hay = el.dataset.search ?? '';
    el.hidden = !terms.every((t) => hay.includes(t));
  });
  $$('[data-palette-group]', dlg).forEach((g) => {
    g.hidden = !$$('[data-palette-item]', g).some((el) => !el.hidden);
  });
  const empty = $('[data-palette-empty]', dlg);
  if (empty) empty.hidden = paletteItems().length > 0;
  setActive(0);
}

let paletteOpener: HTMLElement | null = null;

function openPalette() {
  const dlg = palette();
  if (!dlg || dlg.open) return;
  paletteOpener = document.activeElement as HTMLElement | null;
  setMenu(false);
  const input = $<HTMLInputElement>('[data-palette-input]', dlg);
  if (input) input.value = '';
  filterPalette('');
  dlg.showModal();
  input?.focus();
}

function closePalette() {
  palette()?.close();
}

function runPaletteAction(action: string) {
  closePalette();
  if (action === 'copy-email') {
    const email = $<HTMLElement>('[data-copy]')?.dataset.copy;
    if (email) void copyText(email);
  } else if (action === 'toggle-theme') {
    cycleTheme();
  } else if (action === 'system-theme') {
    window.__theme.set('system');
    syncThemeLabel();
  }
}

/* Project / publication tag filter ----------------------------------- */
function applyFilter(root: HTMLElement, value: string) {
  $$('[data-filter-value]', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filterValue === value)));
  $$('[data-filter-item]', root).forEach((el) => {
    const tags = (el.dataset.tags ?? '').split('|');
    el.hidden = value !== '' && !tags.includes(value);
  });
  $$('[data-filter-section]', root).forEach((s) => {
    s.hidden = !$$('[data-filter-item]', s).some((el) => !el.hidden);
  });
  const status = $('[data-filter-status]', root);
  if (status) {
    const count = $$('[data-filter-item]', root).filter((el) => !el.hidden).length;
    status.textContent = value === '' ? '' : `Showing ${count} result${count === 1 ? '' : 's'} for ${value}`;
  }
}

/* Scroll reveal ------------------------------------------------------ */
let observer: IntersectionObserver | undefined;

function initReveal() {
  observer?.disconnect();
  const els = $$('.reveal:not(.is-visible)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  els.forEach((el) => observer!.observe(el));
}

/* Wiring ------------------------------------------------------------- */
function onPageLoad() {
  syncThemeLabel();
  $$('[data-kbd]').forEach((k) => (k.textContent = isMac ? '⌘ K' : 'Ctrl K'));
  initReveal();
}

document.addEventListener('astro:page-load', onPageLoad);

document.addEventListener(
  'close',
  (e) => {
    if ((e.target as HTMLElement).matches?.('[data-palette]')) {
      if (paletteOpener?.isConnected) paletteOpener.focus();
      else (document.activeElement as HTMLElement | null)?.blur();
    }
  },
  true,
);

document.addEventListener('astro:before-swap', () => {
  palette()?.close();
  document.documentElement.style.overflow = '';
});

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (target.closest('[data-theme-toggle]')) return cycleTheme();
  if (target.closest('[data-menu-toggle]')) return setMenu(!menuIsOpen());
  if (target.closest('#mobile-menu a')) return setMenu(false);
  if (target.closest('[data-palette-open]')) return openPalette();

  const copy = target.closest<HTMLElement>('[data-copy]');
  if (copy) return void handleCopy(copy);

  if (target.closest('[data-scroll-top]')) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    return;
  }

  const filter = target.closest<HTMLElement>('[data-filter-value]');
  if (filter) {
    const root = filter.closest<HTMLElement>('[data-filter-root]');
    if (root) applyFilter(root, filter.dataset.filterValue ?? '');
    return;
  }

  const dlg = palette();
  if (dlg?.open) {
    if (target === dlg) return closePalette();
    const item = target.closest<HTMLElement>('[data-palette-item]');
    if (item?.dataset.action) return runPaletteAction(item.dataset.action);
    if (item) closePalette();
  }
});

document.addEventListener('input', (e) => {
  const input = e.target as HTMLElement;
  if (input.matches('[data-palette-input]')) filterPalette((input as HTMLInputElement).value);
});

document.addEventListener('keydown', (e) => {
  const dlg = palette();
  const typing = (e.target as HTMLElement).closest('input, textarea, select, [contenteditable]');

  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    return dlg?.open ? closePalette() : openPalette();
  }
  if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    return openPalette();
  }

  if (dlg?.open) {
    const items = paletteItems();
    const current = items.findIndex((el) => el.getAttribute('aria-selected') === 'true');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(items.length ? (current + 1) % items.length : 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(items.length ? (current - 1 + items.length) % items.length : 0);
    } else if (e.key === 'Enter' && items[current]) {
      e.preventDefault();
      items[current].click();
    } else if (e.key === 'Tab') {
      e.preventDefault();
    }
    return;
  }

  if (menuIsOpen()) {
    if (e.key === 'Escape') {
      setMenu(false);
      $<HTMLElement>('[data-menu-toggle]')?.focus();
    } else if (e.key === 'Tab') {
      trapFocus(e);
    }
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncThemeLabel);

window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

if (document.readyState !== 'loading') onPageLoad();
