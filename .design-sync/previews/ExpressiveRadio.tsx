import * as React from 'react';
import { ExpressiveRadio } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' };
const label: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, color: 'var(--md-sys-color-on-surface)' };
const small: React.CSSProperties = { display: 'block', font: 'var(--md-sys-typescale-body-sm)', color: 'var(--md-sys-color-on-surface-variant)' };

export const States = () => (
  <div style={row}>
    <ExpressiveRadio name="state-a" aria-label="Unselected" />
    <ExpressiveRadio name="state-b" checked aria-label="Selected" />
    <ExpressiveRadio name="state-c" disabled aria-label="Disabled" />
    <ExpressiveRadio name="state-d" disabled checked aria-label="Disabled, selected" />
  </div>
);

export const DeliveryOptions = () => (
  <div role="radiogroup" aria-label="Delivery" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <label style={label}>
      <ExpressiveRadio name="delivery" value="standard" checked />
      <span>Standard<small style={small}>3–5 working days · free</small></span>
    </label>
    <label style={label}>
      <ExpressiveRadio name="delivery" value="express" />
      <span>Express<small style={small}>Next working day · R95</small></span>
    </label>
    <label style={label}>
      <ExpressiveRadio name="delivery" value="same-day" disabled />
      <span>Same day<small style={small}>Not available for your area</small></span>
    </label>
  </div>
);
