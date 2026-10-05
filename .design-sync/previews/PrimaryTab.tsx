import * as React from 'react';
import { Tabs, PrimaryTab, Icon } from '@mindmatter/material-web-react';

const panel: React.CSSProperties = {
  padding: '16px 4px 0',
  color: 'var(--md-sys-color-on-surface-variant)',
  fontSize: 14,
  minHeight: 40,
};

export const LabelOnly = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Trips" activeTabIndex={0}>
      <PrimaryTab active>Upcoming</PrimaryTab>
      <PrimaryTab>Past</PrimaryTab>
      <PrimaryTab>Cancelled</PrimaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>Cape Town → Johannesburg · Friday 10 October, 07:15.</div>
  </div>
);

export const StackedIcon = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Travel" activeTabIndex={1}>
      <PrimaryTab><Icon slot="icon">flight</Icon>Flights</PrimaryTab>
      <PrimaryTab active><Icon slot="icon">hotel</Icon>Stays</PrimaryTab>
      <PrimaryTab><Icon slot="icon">directions_car</Icon>Car hire</PrimaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>3 nights at the Silo Hotel · check-in from 14:00.</div>
  </div>
);

export const InlineIcon = () => (
  <div style={{ maxWidth: 480 }}>
    <Tabs aria-label="Media" activeTabIndex={0}>
      <PrimaryTab inlineIcon active><Icon slot="icon">image</Icon>Photos</PrimaryTab>
      <PrimaryTab inlineIcon><Icon slot="icon">videocam</Icon>Videos</PrimaryTab>
      <PrimaryTab inlineIcon><Icon slot="icon">description</Icon>Documents</PrimaryTab>
    </Tabs>
    <div role="tabpanel" style={panel}>1,082 photos · last import from the Cape Town trip.</div>
  </div>
);

export const IconOnly = () => (
  <div style={{ maxWidth: 320 }}>
    <Tabs aria-label="Editor mode" activeTabIndex={2}>
      <PrimaryTab iconOnly aria-label="Text"><Icon slot="icon">text_fields</Icon></PrimaryTab>
      <PrimaryTab iconOnly aria-label="Draw"><Icon slot="icon">brush</Icon></PrimaryTab>
      <PrimaryTab iconOnly active aria-label="Shapes"><Icon slot="icon">category</Icon></PrimaryTab>
      <PrimaryTab iconOnly aria-label="Images"><Icon slot="icon">image</Icon></PrimaryTab>
    </Tabs>
  </div>
);
