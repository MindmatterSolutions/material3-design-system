import * as React from 'react';

export type Accent = 'orange' | 'violet' | 'teal' | 'blue' | 'green' | 'rose';

/**
 * The root of every design built with this system. Paints the theme's dark
 * ground (surface colour, on-surface ink, the theme's sans) and selects the
 * accent. The theme is dark only and the accent lives on `<html
 * data-accent>`, so this sets that attribute for you.
 */
export interface ThemeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The accent. Only the accent roles move; surfaces, ink and outlines stay put. Default `orange`. */
  accent?: Accent;
  children?: React.ReactNode;
}

/**
 * The root of every design built with this system. Paints the theme's dark
 * ground (surface colour, on-surface ink, the theme's sans) and selects the
 * accent. The theme is dark only and the accent lives on `<html
 * data-accent>`, so this sets that attribute for you.
 */
export function ThemeRoot({ accent, style, children, ...rest }: ThemeRootProps) {
  // One accent per page: the theme reads it from <html>. Put back whatever was
  // there when this root unmounts or changes, so it never outlives the root.
  React.useLayoutEffect(() => {
    if (!accent) return;
    const root = document.documentElement;
    const before = root.getAttribute('data-accent');
    root.setAttribute('data-accent', accent);
    return () => {
      if (before === null) root.removeAttribute('data-accent');
      else root.setAttribute('data-accent', before);
    };
  }, [accent]);
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
