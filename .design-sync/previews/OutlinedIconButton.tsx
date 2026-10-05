import * as React from 'react';
import { OutlinedIconButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <OutlinedIconButton aria-label="Share"><Icon>share</Icon></OutlinedIconButton>
    <OutlinedIconButton aria-label="Copy link"><Icon>link</Icon></OutlinedIconButton>
    <OutlinedIconButton aria-label="Print"><Icon>print</Icon></OutlinedIconButton>
    <OutlinedIconButton aria-label="More options"><Icon>more_vert</Icon></OutlinedIconButton>
  </div>
);

export const Toggle = () => (
  <div style={row}>
    <OutlinedIconButton toggle aria-label="Pin" ariaLabelSelected="Unpin">
      <Icon>push_pin</Icon><Icon slot="selected">push_pin</Icon>
    </OutlinedIconButton>
    <OutlinedIconButton toggle selected aria-label="Pin" ariaLabelSelected="Unpin">
      <Icon>push_pin</Icon><Icon slot="selected">push_pin</Icon>
    </OutlinedIconButton>
    <OutlinedIconButton toggle aria-label="Show password" ariaLabelSelected="Hide password">
      <Icon>visibility</Icon><Icon slot="selected">visibility_off</Icon>
    </OutlinedIconButton>
    <OutlinedIconButton toggle selected aria-label="Show password" ariaLabelSelected="Hide password">
      <Icon>visibility</Icon><Icon slot="selected">visibility_off</Icon>
    </OutlinedIconButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <OutlinedIconButton disabled aria-label="Print"><Icon>print</Icon></OutlinedIconButton>
    <OutlinedIconButton softDisabled aria-label="Delete (no permission)"><Icon>delete</Icon></OutlinedIconButton>
  </div>
);

export const Pagination = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <OutlinedIconButton disabled aria-label="First page"><Icon>first_page</Icon></OutlinedIconButton>
    <OutlinedIconButton disabled aria-label="Previous page"><Icon>chevron_left</Icon></OutlinedIconButton>
    <span style={{ padding: '0 12px', fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' }}>1–25 of 312</span>
    <OutlinedIconButton aria-label="Next page"><Icon>chevron_right</Icon></OutlinedIconButton>
    <OutlinedIconButton aria-label="Last page"><Icon>last_page</Icon></OutlinedIconButton>
  </div>
);
