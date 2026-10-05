import * as React from 'react';
import { ExpressiveSwitch, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' };
const split: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, color: 'var(--md-sys-color-on-surface)' };
const small: React.CSSProperties = { display: 'block', font: 'var(--md-sys-typescale-body-sm)', color: 'var(--md-sys-color-on-surface-variant)' };

export const States = () => (
  <div style={row}>
    <ExpressiveSwitch aria-label="Off" />
    <ExpressiveSwitch selected aria-label="On" />
    <ExpressiveSwitch disabled aria-label="Disabled" />
    <ExpressiveSwitch disabled selected aria-label="Disabled, on" />
  </div>
);

export const WithIcons = () => (
  <div style={row}>
    <ExpressiveSwitch aria-label="Wi-Fi off">
      <Icon slot="off-icon">close</Icon>
      <Icon slot="on-icon">check</Icon>
    </ExpressiveSwitch>
    <ExpressiveSwitch selected aria-label="Wi-Fi on">
      <Icon slot="off-icon">close</Icon>
      <Icon slot="on-icon">check</Icon>
    </ExpressiveSwitch>
  </div>
);

export const Settings = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
    <label style={split}>
      <span>Push notifications<small style={small}>Alerts on this device</small></span>
      <ExpressiveSwitch selected />
    </label>
    <label style={split}>
      <span>Email digest<small style={small}>Every Monday at 08:00</small></span>
      <ExpressiveSwitch />
    </label>
    <label style={split}>
      <span>Do not disturb<small style={small}>Managed by your organisation</small></span>
      <ExpressiveSwitch disabled selected />
    </label>
  </div>
);
