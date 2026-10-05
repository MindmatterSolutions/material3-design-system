import * as React from 'react';
import { CircularProgress } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' };
const cap: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--md-sys-color-on-surface-variant)' };

export const Determinate = () => (
  <div style={row}>
    <div style={cap}><CircularProgress value={0.25} aria-label="Upload 25%" />25%</div>
    <div style={cap}><CircularProgress value={0.6} aria-label="Upload 60%" />60%</div>
    <div style={cap}><CircularProgress value={7} max={10} aria-label="Step 7 of 10" />7 of 10</div>
    <div style={cap}><CircularProgress value={1} aria-label="Upload complete" />Done</div>
  </div>
);

export const Indeterminate = () => (
  <div style={row}>
    <div style={cap}><CircularProgress indeterminate aria-label="Loading" />Loading</div>
    <div style={cap}><CircularProgress indeterminate fourColor aria-label="Loading" />Four colour</div>
  </div>
);
