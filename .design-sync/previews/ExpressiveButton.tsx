import * as React from 'react';
import { ExpressiveButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const Colors = () => (
  <div style={row}>
    <ExpressiveButton color="filled">Send</ExpressiveButton>
    <ExpressiveButton color="tonal">Save draft</ExpressiveButton>
    <ExpressiveButton color="elevated">Reply</ExpressiveButton>
    <ExpressiveButton color="outlined">Share</ExpressiveButton>
    <ExpressiveButton color="text">Cancel</ExpressiveButton>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <ExpressiveButton color="filled" size="xs">Send</ExpressiveButton>
    <ExpressiveButton color="filled" size="sm">Send</ExpressiveButton>
    <ExpressiveButton color="filled" size="md">Send</ExpressiveButton>
    <ExpressiveButton color="filled" size="lg">Send</ExpressiveButton>
    <ExpressiveButton color="filled" size="xl">Send</ExpressiveButton>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <ExpressiveButton color="filled"><Icon>send</Icon>Send</ExpressiveButton>
    <ExpressiveButton color="tonal"><Icon>download</Icon>Download</ExpressiveButton>
    <ExpressiveButton color="outlined" square><Icon>edit</Icon>Rename</ExpressiveButton>
  </div>
);

export const Toggle = () => (
  <div style={row}>
    <ExpressiveButton type="toggle" color="tonal">Follow</ExpressiveButton>
    <ExpressiveButton type="toggle" color="tonal" selected>Following</ExpressiveButton>
    <ExpressiveButton color="filled" disabled>Submit</ExpressiveButton>
    <ExpressiveButton color="filled" softDisabled>Publish</ExpressiveButton>
  </div>
);
