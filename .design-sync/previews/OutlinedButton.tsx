import * as React from 'react';
import { OutlinedButton, FilledButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <OutlinedButton>Save as draft</OutlinedButton>
    <OutlinedButton>Back</OutlinedButton>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <OutlinedButton hasIcon><Icon slot="icon">upload</Icon>Upload file</OutlinedButton>
    <OutlinedButton hasIcon><Icon slot="icon">share</Icon>Share</OutlinedButton>
  </div>
);

export const TrailingIcon = () => (
  <div style={row}>
    <OutlinedButton hasIcon trailingIcon>See details<Icon slot="icon">arrow_forward</Icon></OutlinedButton>
    <OutlinedButton hasIcon trailingIcon>Docs<Icon slot="icon">open_in_new</Icon></OutlinedButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <OutlinedButton disabled>Save as draft</OutlinedButton>
    <OutlinedButton softDisabled hasIcon><Icon slot="icon">upload</Icon>Upload file</OutlinedButton>
  </div>
);

export const CheckoutFooter = () => (
  <div style={{ maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, color: 'var(--md-sys-color-on-surface)' }}>
      <span>Order total</span><span>R 1 249.00</span>
    </div>
    <div style={{ ...row, justifyContent: 'flex-end' }}>
      <OutlinedButton hasIcon><Icon slot="icon">arrow_back</Icon>Back to cart</OutlinedButton>
      <FilledButton hasIcon><Icon slot="icon">lock</Icon>Pay now</FilledButton>
    </div>
  </div>
);
