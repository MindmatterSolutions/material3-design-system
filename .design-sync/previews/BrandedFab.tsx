import * as React from 'react';
import { BrandedFab } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' };

// Multi-colour brand mark drawn from the theme's colour roles.
// No inline size: the FAB sizes slotted icons itself (36px medium, 48px large).
const BrandMark = () => (
  <svg slot="icon" viewBox="0 0 36 36" aria-hidden="true">
    <path style={{ fill: 'var(--md-sys-color-tertiary)' }} d="M16 16v14h4V20z" />
    <path style={{ fill: 'var(--md-sys-color-primary)' }} d="M30 16H20l-4 4h14z" />
    <path style={{ fill: 'var(--md-sys-color-secondary)' }} d="M6 16v4h10l4-4z" />
    <path style={{ fill: 'var(--md-sys-color-error)' }} d="M20 16V6h-4v14z" />
  </svg>
);

export const Plain = () => (
  <div style={row}>
    <BrandedFab aria-label="Create"><BrandMark /></BrandedFab>
  </div>
);

export const Extended = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
    <BrandedFab label="Create"><BrandMark /></BrandedFab>
    <BrandedFab label="New document"><BrandMark /></BrandedFab>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <BrandedFab aria-label="Create"><BrandMark /></BrandedFab>
    <BrandedFab size="large" aria-label="Create"><BrandMark /></BrandedFab>
  </div>
);

export const Lowered = () => (
  <div style={row}>
    <BrandedFab lowered aria-label="Create"><BrandMark /></BrandedFab>
    <BrandedFab lowered label="Compose"><BrandMark /></BrandedFab>
  </div>
);
