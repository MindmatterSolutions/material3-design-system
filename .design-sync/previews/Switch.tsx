import * as React from 'react';
import { Switch } from '@mindmatter/material-web-react';

const list: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 };
const row: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, color: 'var(--md-sys-color-on-surface)', fontSize: 14 };
const off: React.CSSProperties = { ...row, color: 'var(--md-sys-color-on-surface-variant)', opacity: 0.6 };

export const Basic = () => (
  <div style={list}>
    <label style={row}><Switch aria-label="Order updates by email" selected />Order updates by email</label>
    <label style={row}><Switch aria-label="Marketing emails" />Marketing emails</label>
  </div>
);

export const WithIcons = () => (
  <div style={list}>
    <label style={row}><Switch icons aria-label="Two-step sign-in" selected />Two-step sign-in</label>
    <label style={row}><Switch icons aria-label="Location sharing" />Location sharing</label>
    <label style={row}><Switch icons showOnlySelectedIcon aria-label="Save card for later" selected />Save card for later</label>
  </div>
);

export const Disabled = () => (
  <div style={list}>
    <label style={off}><Switch aria-label="Beta features" disabled />Beta features</label>
    <label style={off}><Switch icons aria-label="Encrypted backups" selected disabled />Encrypted backups</label>
  </div>
);
