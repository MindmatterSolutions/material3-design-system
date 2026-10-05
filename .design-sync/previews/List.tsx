import * as React from 'react';
import { List, ListItem, Divider, Icon } from '@mindmatter/material-web-react';

export const Contacts = () => (
  <List aria-label="Contacts" style={{ maxWidth: 420 }}>
    <ListItem>
      <Icon slot="start">person</Icon>
      <div slot="headline">Lerato Mokoena</div>
      <div slot="supporting-text">Product design · Johannesburg</div>
      <Icon slot="end">call</Icon>
    </ListItem>
    <Divider insetStart />
    <ListItem>
      <Icon slot="start">person</Icon>
      <div slot="headline">Pieter van der Merwe</div>
      <div slot="supporting-text">Engineering · Stellenbosch</div>
      <Icon slot="end">call</Icon>
    </ListItem>
    <Divider insetStart />
    <ListItem>
      <Icon slot="start">person</Icon>
      <div slot="overline">Away until Monday</div>
      <div slot="headline">Aisha Patel</div>
      <div slot="supporting-text">Marketing · Durban</div>
      <Icon slot="end">mail</Icon>
    </ListItem>
  </List>
);

export const Settings = () => (
  <List aria-label="Settings" style={{ maxWidth: 420 }}>
    <ListItem type="button">
      <Icon slot="start">wifi</Icon>
      <div slot="headline">Wi-Fi</div>
      <div slot="supporting-text">Studio-5G</div>
      <Icon slot="end">chevron_right</Icon>
    </ListItem>
    <ListItem type="button">
      <Icon slot="start">notifications</Icon>
      <div slot="headline">Notifications</div>
      <div slot="supporting-text">Quiet hours 22:00–07:00</div>
      <Icon slot="end">chevron_right</Icon>
    </ListItem>
    <Divider />
    <ListItem type="button">
      <Icon slot="start">battery_full</Icon>
      <div slot="headline">Battery</div>
      <span slot="trailing-supporting-text">86%</span>
    </ListItem>
    <ListItem type="button" disabled>
      <Icon slot="start">location_on</Icon>
      <div slot="headline">Location</div>
      <div slot="supporting-text">Managed by your organisation</div>
    </ListItem>
  </List>
);

export const SingleLine = () => (
  <List aria-label="Folders" style={{ maxWidth: 420 }}>
    <ListItem type="button">
      <Icon slot="start">mail</Icon>
      <div slot="headline">Inbox</div>
      <span slot="trailing-supporting-text">24</span>
    </ListItem>
    <ListItem type="button">
      <Icon slot="start">send</Icon>
      <div slot="headline">Sent</div>
    </ListItem>
    <ListItem type="button">
      <Icon slot="start">star</Icon>
      <div slot="headline">Starred</div>
      <span slot="trailing-supporting-text">3</span>
    </ListItem>
    <ListItem type="button">
      <Icon slot="start">delete</Icon>
      <div slot="headline">Bin</div>
    </ListItem>
  </List>
);
