import * as React from 'react';
import { FilledTonalButton, FilledButton, TextButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <FilledTonalButton>Preview</FilledTonalButton>
    <FilledTonalButton>Add to wishlist</FilledTonalButton>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <FilledTonalButton hasIcon><Icon slot="icon">person_add</Icon>Invite</FilledTonalButton>
    <FilledTonalButton hasIcon><Icon slot="icon">edit</Icon>Edit profile</FilledTonalButton>
  </div>
);

export const TrailingIcon = () => (
  <div style={row}>
    <FilledTonalButton hasIcon trailingIcon>Skip intro<Icon slot="icon">skip_next</Icon></FilledTonalButton>
    <FilledTonalButton hasIcon trailingIcon>More options<Icon slot="icon">expand_more</Icon></FilledTonalButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <FilledTonalButton disabled>Preview</FilledTonalButton>
    <FilledTonalButton softDisabled hasIcon><Icon slot="icon">person_add</Icon>Invite</FilledTonalButton>
  </div>
);

export const OnboardingStep = () => (
  <div style={{ maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div style={{ fontSize: 22, color: 'var(--md-sys-color-on-surface)' }}>Turn on notifications?</div>
    <div style={{ fontSize: 14, lineHeight: '20px', color: 'var(--md-sys-color-on-surface-variant)' }}>
      Get a heads-up when your order ships and when a courier is nearby.
    </div>
    <div style={{ ...row, justifyContent: 'flex-end' }}>
      <TextButton>Not now</TextButton>
      <FilledTonalButton>Customise</FilledTonalButton>
      <FilledButton hasIcon><Icon slot="icon">notifications</Icon>Turn on</FilledButton>
    </div>
  </div>
);
