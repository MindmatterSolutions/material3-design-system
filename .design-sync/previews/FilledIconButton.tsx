import * as React from 'react';
import { FilledIconButton, IconButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <FilledIconButton aria-label="Add"><Icon>add</Icon></FilledIconButton>
    <FilledIconButton aria-label="Send"><Icon>send</Icon></FilledIconButton>
    <FilledIconButton aria-label="Edit"><Icon>edit</Icon></FilledIconButton>
    <FilledIconButton aria-label="Settings"><Icon>settings</Icon></FilledIconButton>
  </div>
);

export const Toggle = () => (
  <div style={row}>
    <FilledIconButton toggle aria-label="Add to favourites" ariaLabelSelected="Remove from favourites">
      <Icon>favorite</Icon><Icon slot="selected">favorite</Icon>
    </FilledIconButton>
    <FilledIconButton toggle selected aria-label="Add to favourites" ariaLabelSelected="Remove from favourites">
      <Icon>favorite</Icon><Icon slot="selected">favorite</Icon>
    </FilledIconButton>
    <FilledIconButton toggle aria-label="Mute" ariaLabelSelected="Unmute">
      <Icon>mic</Icon><Icon slot="selected">mic_off</Icon>
    </FilledIconButton>
    <FilledIconButton toggle selected aria-label="Mute" ariaLabelSelected="Unmute">
      <Icon>mic</Icon><Icon slot="selected">mic_off</Icon>
    </FilledIconButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <FilledIconButton disabled aria-label="Send"><Icon>send</Icon></FilledIconButton>
    <FilledIconButton softDisabled aria-label="Delete (no permission)"><Icon>delete</Icon></FilledIconButton>
  </div>
);

export const ChatComposer = () => (
  <div style={{ maxWidth: 400, display: 'flex', alignItems: 'center', gap: 8, padding: '4px 4px 4px 16px', borderRadius: 28, background: 'var(--md-sys-color-surface-container-high)' }}>
    <span style={{ flex: 1, fontSize: 16, color: 'var(--md-sys-color-on-surface-variant)' }}>Message Thandi…</span>
    <IconButton aria-label="Attach file"><Icon>attach_file</Icon></IconButton>
    <FilledIconButton aria-label="Send message"><Icon>send</Icon></FilledIconButton>
  </div>
);
