import * as React from 'react';
import { ExpressiveCheckbox } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' };
const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 };
const label: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, color: 'var(--md-sys-color-on-surface)' };

export const States = () => (
  <div style={row}>
    <ExpressiveCheckbox aria-label="Unchecked" />
    <ExpressiveCheckbox checked aria-label="Checked" />
    <ExpressiveCheckbox indeterminate aria-label="Indeterminate" />
    <ExpressiveCheckbox disabled aria-label="Disabled" />
    <ExpressiveCheckbox disabled checked aria-label="Disabled, checked" />
  </div>
);

export const FilterList = () => (
  <div style={col}>
    <label style={label}><ExpressiveCheckbox checked />Unread</label>
    <label style={label}><ExpressiveCheckbox checked />Starred</label>
    <label style={label}><ExpressiveCheckbox />Has attachments</label>
    <label style={label}><ExpressiveCheckbox indeterminate />From my team (some members)</label>
  </div>
);

export const ErrorState = () => (
  <div style={col}>
    <label style={label}><ExpressiveCheckbox error required />I agree to the retention policy</label>
    <label style={label}><ExpressiveCheckbox error checked />Share usage data with administrators</label>
  </div>
);
