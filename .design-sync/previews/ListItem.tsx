import * as React from 'react';
import { List, ListItem, Divider, Icon } from '@mindmatter/material-web-react';

export const TextItems = () => (
  <List aria-label="Order details" style={{ maxWidth: 420 }}>
    <ListItem>
      <Icon slot="start">local_shipping</Icon>
      <div slot="overline">Shipping</div>
      <div slot="headline">Arrives Thursday, 9 October</div>
      <div slot="supporting-text">Courier Guy · tracking CG-48211</div>
    </ListItem>
    <Divider insetStart />
    <ListItem>
      <Icon slot="start">receipt_long</Icon>
      <div slot="headline">Order total</div>
      <div slot="supporting-text">2 items, VAT included</div>
      <span slot="trailing-supporting-text">R 1 249</span>
    </ListItem>
    <Divider insetStart />
    <ListItem>
      <Icon slot="start">location_on</Icon>
      <div slot="headline">14 Bree Street, Cape Town</div>
      <div slot="supporting-text">Leave with the building concierge if nobody answers the door.</div>
    </ListItem>
  </List>
);

export const ButtonItems = () => (
  <List aria-label="Account" style={{ maxWidth: 420 }}>
    <ListItem type="button">
      <Icon slot="start">person</Icon>
      <div slot="headline">Profile</div>
      <div slot="supporting-text">Name, photo and contact details</div>
      <Icon slot="end">chevron_right</Icon>
    </ListItem>
    <ListItem type="button">
      <Icon slot="start">lock</Icon>
      <div slot="headline">Password &amp; security</div>
      <div slot="supporting-text">Two-step verification is on</div>
      <Icon slot="end">chevron_right</Icon>
    </ListItem>
    <ListItem type="button" disabled>
      <Icon slot="start">credit_card</Icon>
      <div slot="headline">Billing</div>
      <div slot="supporting-text">Managed by your organisation</div>
      <Icon slot="end">chevron_right</Icon>
    </ListItem>
  </List>
);

export const LinkItems = () => (
  <List aria-label="Help" style={{ maxWidth: 420 }}>
    <ListItem type="link" href="#getting-started">
      <Icon slot="start">school</Icon>
      <div slot="headline">Getting started guide</div>
      <Icon slot="end">arrow_forward</Icon>
    </ListItem>
    <ListItem type="link" href="#release-notes" target="_blank">
      <Icon slot="start">new_releases</Icon>
      <div slot="headline">Release notes</div>
      <div slot="supporting-text">Opens in a new tab</div>
      <Icon slot="end">open_in_new</Icon>
    </ListItem>
    <ListItem type="link" href="#contact">
      <Icon slot="start">support_agent</Icon>
      <div slot="headline">Contact support</div>
      <Icon slot="end">arrow_forward</Icon>
    </ListItem>
  </List>
);
