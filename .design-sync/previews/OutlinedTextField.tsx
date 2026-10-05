import * as React from 'react';
import { OutlinedTextField, Icon } from '@mindmatter/material-web-react';

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 };

export const Basic = () => (
  <div style={col}>
    <OutlinedTextField label="Full name" value="Amara Okafor" />
    <OutlinedTextField label="Work email" type="email" placeholder="you@company.com" supportingText="Receipts are sent here" />
  </div>
);

export const WithIcons = () => (
  <div style={col}>
    <OutlinedTextField label="Search orders" value="Order #48213">
      <Icon slot="leading-icon">search</Icon>
      <Icon slot="trailing-icon">close</Icon>
    </OutlinedTextField>
    <OutlinedTextField label="Unit price" prefixText="R " value="249.00" />
  </div>
);

export const States = () => (
  <div style={col}>
    <OutlinedTextField label="Postal code" value="80A1" error errorText="Use four digits, e.g. 8001" />
    <OutlinedTextField label="Account ID" value="MM-20419" disabled />
  </div>
);

export const Textarea = () => (
  <div style={col}>
    <OutlinedTextField label="Delivery instructions" type="textarea" rows={3} maxLength={200}
      value="Ring the bell at the side gate. If no one answers, leave it with reception." />
  </div>
);
