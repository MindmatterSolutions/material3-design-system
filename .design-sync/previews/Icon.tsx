import * as React from 'react';
import { Icon } from '@mindmatter/material-web-react';

const names = ['home', 'search', 'favorite', 'settings', 'mail', 'notifications', 'person', 'bookmark', 'star', 'delete', 'share', 'photo_camera'];
const grid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(6, 72px)', gap: 12 };
const tile: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--md-sys-color-on-surface-variant)' };
const row: React.CSSProperties = { display: 'flex', gap: 24, alignItems: 'flex-end' };

export const Gallery = () => (
  <div style={grid}>
    {names.map((n) => (
      <div key={n} style={tile}>
        <Icon style={{ color: 'var(--md-sys-color-on-surface)' }}>{n}</Icon>
        {n}
      </div>
    ))}
  </div>
);

export const Sizes = () => (
  <div style={row}>
    {['20px', '24px', '32px', '40px', '48px'].map((s) => (
      <div key={s} style={tile}>
        <Icon style={{ '--md-icon-size': s } as React.CSSProperties}>favorite</Icon>
        {s}
      </div>
    ))}
  </div>
);

export const FilledVsOutlined = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    {[0, 1].map((fill) => (
      <div key={fill} style={row}>
        {['favorite', 'star', 'bookmark', 'home', 'notifications', 'check_circle'].map((n) => (
          <Icon key={n} style={{ '--md-icon-size': '32px', '--md-icon-fill': fill, color: 'var(--md-sys-color-primary)' } as React.CSSProperties}>{n}</Icon>
        ))}
        <span style={{ fontSize: 12, color: 'var(--md-sys-color-on-surface-variant)' }}>{fill ? 'Filled · FILL 1' : 'Outlined · FILL 0'}</span>
      </div>
    ))}
  </div>
);
