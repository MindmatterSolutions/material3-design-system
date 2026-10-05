import * as React from 'react';
import { Checkbox } from '@mindmatter/material-web-react';

const list: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 };
const row: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, color: 'var(--md-sys-color-on-surface)', fontSize: 14 };
const off: React.CSSProperties = { ...row, color: 'var(--md-sys-color-on-surface-variant)', opacity: 0.6 };

export const States = () => (
  <div style={list}>
    <label style={row}><Checkbox aria-label="Linen shirt" checked />Linen shirt</label>
    <label style={row}><Checkbox aria-label="Canvas tote" />Canvas tote</label>
    <label style={row}><Checkbox aria-label="Select all items" indeterminate />Select all items</label>
  </div>
);

export const Disabled = () => (
  <div style={list}>
    <label style={off}><Checkbox aria-label="Gift wrap" disabled />Gift wrap (unavailable)</label>
    <label style={off}><Checkbox aria-label="Insurance" checked disabled />Insurance (included)</label>
  </div>
);

export const Group = () => (
  <div style={list}>
    <label style={row}><Checkbox aria-label="Select all" indeterminate />Select all</label>
    <div style={{ ...list, paddingLeft: 28 }}>
      <label style={row}><Checkbox aria-label="Linen shirt" checked />Linen shirt</label>
      <label style={row}><Checkbox aria-label="Canvas tote" checked />Canvas tote</label>
      <label style={row}><Checkbox aria-label="Leather belt" />Leather belt</label>
    </div>
  </div>
);
