import * as React from 'react';
import { FilledTextField, Icon } from '@mindmatter/material-web-react';

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 };

export const Basic = () => (
  <div style={col}>
    <FilledTextField label="Full name" value="Amara Okafor" />
    <FilledTextField label="Work email" type="email" placeholder="name@company.com" supportingText="Receipts are sent here" />
  </div>
);

export const WithIcons = () => (
  <div style={col}>
    <FilledTextField label="Search orders" value="Order #48213">
      <Icon slot="leading-icon">search</Icon>
      <Icon slot="trailing-icon">close</Icon>
    </FilledTextField>
    <FilledTextField label="Unit price" inputMode="decimal" prefixText="R " value="249.00" />
    <FilledTextField label="Parcel weight" inputMode="decimal" suffixText="kg" value="2.4" />
  </div>
);

export const States = () => (
  <div style={col}>
    <FilledTextField label="Postal code" value="80A1" error errorText="Use four digits, e.g. 8001" />
    <FilledTextField label="Account ID" value="MM-20419" disabled />
  </div>
);

export const Textarea = () => (
  <div style={col}>
    <FilledTextField label="Delivery instructions" type="textarea" rows={3} maxLength={200}
      value="Ring the bell at the side gate. If no one answers, leave it with reception." />
  </div>
);
