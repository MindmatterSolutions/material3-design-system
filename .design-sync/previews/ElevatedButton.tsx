import * as React from 'react';
import { ElevatedButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <ElevatedButton>Load more</ElevatedButton>
    <ElevatedButton>View all reviews</ElevatedButton>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <ElevatedButton hasIcon><Icon slot="icon">download</Icon>Download PDF</ElevatedButton>
    <ElevatedButton hasIcon><Icon slot="icon">filter_list</Icon>Filters</ElevatedButton>
  </div>
);

export const TrailingIcon = () => (
  <div style={row}>
    <ElevatedButton hasIcon trailingIcon>Open in Maps<Icon slot="icon">open_in_new</Icon></ElevatedButton>
    <ElevatedButton hasIcon trailingIcon>Sort by<Icon slot="icon">arrow_drop_down</Icon></ElevatedButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <ElevatedButton disabled>Load more</ElevatedButton>
    <ElevatedButton softDisabled hasIcon><Icon slot="icon">download</Icon>Export</ElevatedButton>
  </div>
);

export const OverContent = () => (
  <div style={{ maxWidth: 360, padding: 24, borderRadius: 16, background: 'var(--md-sys-color-surface-container-high)', display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div style={{ font: 'var(--md-sys-typescale-title-medium-font, inherit)', fontSize: 16, color: 'var(--md-sys-color-on-surface)' }}>Showing 12 of 48 recipes</div>
    <div style={{ fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' }}>Weeknight dinners under 30 minutes</div>
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
      <ElevatedButton hasIcon><Icon slot="icon">expand_more</Icon>Load 12 more</ElevatedButton>
    </div>
  </div>
);
