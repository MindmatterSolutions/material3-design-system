import * as React from 'react';
import { FilledButton, FilledTonalButton, OutlinedButton, TextButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <FilledButton>Publish</FilledButton>
    <FilledButton>Confirm booking</FilledButton>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <FilledButton hasIcon><Icon slot="icon">send</Icon>Send</FilledButton>
    <FilledButton hasIcon><Icon slot="icon">add</Icon>New project</FilledButton>
  </div>
);

export const TrailingIcon = () => (
  <div style={row}>
    <FilledButton hasIcon trailingIcon>Next<Icon slot="icon">arrow_forward</Icon></FilledButton>
    <FilledButton hasIcon trailingIcon>Continue<Icon slot="icon">chevron_right</Icon></FilledButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <FilledButton disabled>Publish</FilledButton>
    <FilledButton softDisabled>Confirm</FilledButton>
  </div>
);

export const EmphasisInContext = () => (
  <div style={{ ...row, justifyContent: 'flex-end' }}>
    <TextButton>Discard</TextButton>
    <OutlinedButton>Save as draft</OutlinedButton>
    <FilledTonalButton>Preview</FilledTonalButton>
    <FilledButton hasIcon><Icon slot="icon">send</Icon>Send invoice</FilledButton>
  </div>
);
