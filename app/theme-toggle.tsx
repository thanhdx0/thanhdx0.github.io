'use client';

const STORAGE_KEY = 'theme-preference';

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(STORAGE_KEY, next);
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border border-[var(--border)] rounded-full w-10 h-10 flex items-center justify-center hover:text-[var(--accent-hover)] transition-colors"
      aria-label="Toggle theme"
      title="Toggle theme"
      suppressHydrationWarning
    >
      <span className="theme-toggle-icon dark">🌙</span>
      <span className="theme-toggle-icon light">☀️</span>
    </button>
  );
}
