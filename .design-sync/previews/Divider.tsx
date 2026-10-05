import * as React from 'react';
import { Divider, List, ListItem, Icon } from '@mindmatter/material-web-react';

export const InList = () => (
  <List style={{ maxWidth: 360 }}>
    <ListItem>
      <Icon slot="start">mail</Icon>
      Inbox
    </ListItem>
    <Divider inset />
    <ListItem>
      <Icon slot="start">send</Icon>
      Sent
    </ListItem>
    <Divider inset />
    <ListItem>
      <Icon slot="start">delete</Icon>
      Bin
    </ListItem>
  </List>
);

export const BetweenSections = () => (
  <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12, font: 'var(--md-sys-typescale-body-md)' }}>
    <div>Billing contact: Amara Okafor</div>
    <Divider />
    <div style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Invoices go out on the 1st of each month.</div>
  </div>
);
