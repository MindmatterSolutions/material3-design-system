import * as React from 'react';
import { Radio } from '@mindmatter/material-web-react';

const list: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 };
const row: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, color: 'var(--md-sys-color-on-surface)', fontSize: 14 };
const off: React.CSSProperties = { ...row, color: 'var(--md-sys-color-on-surface-variant)', opacity: 0.6 };

export const Group = () => (
  <div style={list} role="radiogroup" aria-label="Delivery window">
    <label style={row}><Radio name="window" value="morning" aria-label="Morning, 8–12" />Morning, 8–12</label>
    <label style={row}><Radio name="window" value="afternoon" aria-label="Afternoon, 12–17" checked />Afternoon, 12–17</label>
    <label style={row}><Radio name="window" value="evening" aria-label="Evening, 17–20" />Evening, 17–20</label>
  </div>
);

export const Disabled = () => (
  <div style={list}>
    <label style={off}><Radio name="weekend" value="sat" aria-label="Saturday" disabled />Saturday (fully booked)</label>
    <label style={off}><Radio name="plan" value="annual" aria-label="Annual plan" checked disabled />Annual plan (current)</label>
  </div>
);
