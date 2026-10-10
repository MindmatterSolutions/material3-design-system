import * as React from 'react';

/** `nwu` is the default — the NWU purple the theme draws with no attribute set. */
export type Accent = 'nwu' | 'orange' | 'violet' | 'teal' | 'blue' | 'green' | 'rose';

/** The colour mode. Dark is the default; light is Material's light scheme from the same seed. */
export type Mode = 'dark' | 'light';

/**
 * The root of every design built with this system. Paints the theme's ground
 * (surface colour, on-surface ink, the theme's sans) and selects the accent and
 * the mode. Both live on `<html>` — `data-accent` and `data-theme` — so this
 * sets them for you.
 */
export interface ThemeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The accent. The ground is tinted by it, the way Material tints its neutrals; status colours stay put. Default `nwu`, the NWU purple. */
  accent?: Accent;
  /** Dark (default) or light. Every accent carries both. */
  mode?: Mode;
  children?: React.ReactNode;
}

// Sets one attribute on <html> for as long as the root is mounted, and puts back
// whatever was there before, so a root never outlives itself. `value` null means
// "no attribute", which is how the theme spells its default for both.
function useRootAttribute(name: string, value: string | null, active: boolean) {
  React.useLayoutEffect(() => {
    if (!active) return;
    const root = document.documentElement;
    const before = root.getAttribute(name);
    if (value === null) root.removeAttribute(name);
    else root.setAttribute(name, value);
    return () => {
      if (before === null) root.removeAttribute(name);
      else root.setAttribute(name, before);
    };
  }, [name, value, active]);
}

/**
 * The root of every design built with this system. Paints the theme's ground
 * (surface colour, on-surface ink, the theme's sans) and selects the accent and
 * the mode. Both live on `<html>` — `data-accent` and `data-theme` — so this
 * sets them for you.
 */
export function ThemeRoot({ accent, mode, style, children, ...rest }: ThemeRootProps) {
  // One accent and one mode per page: the theme reads both from <html>. The
  // defaults are no attribute at all, so `nwu` and `dark` clear it.
  useRootAttribute('data-accent', accent && accent !== 'nwu' ? accent : null, accent !== undefined);
  useRootAttribute('data-theme', mode === 'light' ? 'light' : null, mode !== undefined);
  return (
    <div
      {...rest}
      style={{
        background: 'var(--md-sys-color-surface)',
        color: 'var(--md-sys-color-on-surface)',
        fontFamily: 'var(--font-sans)',
        padding: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
