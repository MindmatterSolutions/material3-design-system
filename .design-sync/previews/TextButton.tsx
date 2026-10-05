import * as React from 'react';
import { TextButton, FilledButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <TextButton>Learn more</TextButton>
    <TextButton>Cancel</TextButton>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <TextButton hasIcon><Icon slot="icon">reply</Icon>Reply</TextButton>
    <TextButton hasIcon><Icon slot="icon">undo</Icon>Undo</TextButton>
  </div>
);

export const TrailingIcon = () => (
  <div style={row}>
    <TextButton hasIcon trailingIcon>View all<Icon slot="icon">chevron_right</Icon></TextButton>
    <TextButton hasIcon trailingIcon>Help centre<Icon slot="icon">open_in_new</Icon></TextButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <TextButton disabled>Learn more</TextButton>
    <TextButton softDisabled hasIcon><Icon slot="icon">reply</Icon>Reply</TextButton>
  </div>
);

export const CardActions = () => (
  <div style={{ maxWidth: 360, padding: 20, borderRadius: 16, background: 'var(--md-sys-color-surface-container)', display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ fontSize: 18, color: 'var(--md-sys-color-on-surface)' }}>Storage almost full</div>
    <div style={{ fontSize: 14, lineHeight: '20px', color: 'var(--md-sys-color-on-surface-variant)' }}>
      You've used 14.2 GB of 15 GB. Free up space or upgrade to keep backing up photos.
    </div>
    <div style={{ ...row, justifyContent: 'flex-end', paddingTop: 8 }}>
      <TextButton>Manage storage</TextButton>
      <FilledButton>Upgrade</FilledButton>
    </div>
  </div>
);
