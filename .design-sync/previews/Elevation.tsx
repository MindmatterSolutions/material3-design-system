import * as React from 'react';
import { Elevation, Icon } from '@mindmatter/material-web-react';

// md-elevation casts the shadow of its position:relative parent; the level comes from
// --md-elevation-level on that parent.
const tile = (level: number, bg: string, fg = 'var(--md-sys-color-on-surface)'): React.CSSProperties => ({
  position: 'relative',
  ['--md-elevation-level' as string]: String(level),
  height: 96,
  borderRadius: 12,
  background: bg,
  color: fg,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  fontSize: 12,
});

// Tiles share one colour so only the shadow changes; the lighter stage makes the
// (deliberately small, M3-dark) shadows legible.
export const Levels = () => (
  <div
    style={{
      display: 'inline-grid',
      gridTemplateColumns: 'repeat(3, 150px)',
      gap: 28,
      padding: 28,
      borderRadius: 16,
      background: 'var(--md-sys-color-surface-bright)',
    }}
  >
    {[0, 1, 2, 3, 4, 5].map((level) => (
      <div key={level} style={tile(level, 'var(--md-sys-color-surface-container-highest)')}>
        <Elevation />
        <b style={{ fontSize: 16, fontWeight: 500 }}>Level {level}</b>
        <span style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>--md-elevation-level: {level}</span>
      </div>
    ))}
  </div>
);

export const RaisedSheet = () => (
  <div style={{ position: 'relative', width: 360, maxWidth: '100%', padding: 8 }}>
    <div
      style={{
        position: 'relative',
        ['--md-elevation-level' as string]: '3',
        borderRadius: 28,
        background: 'var(--md-sys-color-surface-container-high)',
        color: 'var(--md-sys-color-on-surface)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <Elevation />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon style={{ color: 'var(--md-sys-color-primary)' }}>local_shipping</Icon>
        <b style={{ fontSize: 16, fontWeight: 500 }}>Arriving today</b>
      </div>
      <p style={{ margin: 0, fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' }}>
        Your parcel is 4 stops away. The driver will call when they reach the gate.
      </p>
    </div>
  </div>
);

export const FloatingButton = () => (
  <div
    style={{
      position: 'relative',
      width: 320,
      maxWidth: '100%',
      height: 200,
      borderRadius: 16,
      background: 'var(--md-sys-color-surface-container-low)',
      border: '1px solid var(--md-sys-color-outline-variant)',
      padding: 20,
      color: 'var(--md-sys-color-on-surface-variant)',
      fontSize: 14,
    }}
  >
    Notes · 18 items
    <div
      style={{
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 56,
        height: 56,
        borderRadius: 16,
        display: 'grid',
        placeItems: 'center',
        background: 'var(--md-sys-color-primary-container)',
        color: 'var(--md-sys-color-on-primary-container)',
        ['--md-elevation-level' as string]: '3',
      }}
    >
      <Elevation />
      <Icon>edit</Icon>
    </div>
  </div>
);
