import * as React from 'react';
import { ExpressiveBadge, ExpressiveIconButton, Icon } from '@mindmatter/material-web-react';

// md-gb-badge has no placement of its own: the wrapper positions it.
const badged: React.CSSProperties = { position: 'relative', display: 'inline-flex' };
const dot: React.CSSProperties = { position: 'absolute', top: 0, insetInlineEnd: 0 };
const count: React.CSSProperties = { position: 'absolute', top: -4, insetInlineStart: 12 };
const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center', padding: 8 };
const fig: React.CSSProperties = {
  margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
  font: 'var(--md-sys-typescale-label-md)', color: 'var(--md-sys-color-on-surface-variant)',
};

export const Dot = () => (
  <div style={row}>
    <figure style={fig}>
      <span style={badged}><Icon>notifications</Icon><ExpressiveBadge aria-label="New activity" style={dot} /></span>
      Alerts
    </figure>
    <figure style={fig}>
      <span style={badged}><Icon>chat</Icon><ExpressiveBadge aria-label="Unread messages" style={dot} /></span>
      Chat
    </figure>
    <figure style={fig}>
      <span style={badged}><Icon>settings</Icon><ExpressiveBadge aria-label="Update available" style={dot} /></span>
      Settings
    </figure>
  </div>
);

export const Counts = () => (
  <div style={row}>
    <figure style={fig}>
      <span style={badged}><Icon>mail</Icon><ExpressiveBadge style={count}>3</ExpressiveBadge></span>
      Inbox
    </figure>
    <figure style={fig}>
      <span style={badged}><Icon>shopping_cart</Icon><ExpressiveBadge style={count}>12</ExpressiveBadge></span>
      Cart
    </figure>
    <figure style={fig}>
      <span style={badged}><Icon>groups</Icon><ExpressiveBadge style={count}>99+</ExpressiveBadge></span>
      Requests
    </figure>
  </div>
);

export const OnIconButtons = () => (
  <div style={{ ...row, gap: 16 }}>
    <span style={badged}>
      <ExpressiveIconButton aria-label="Downloads"><Icon>download</Icon></ExpressiveIconButton>
      <ExpressiveBadge aria-label="Download finished" style={{ position: 'absolute', top: 8, insetInlineEnd: 8 }} />
    </span>
    <span style={badged}>
      <ExpressiveIconButton color="tonal" aria-label="Notifications"><Icon>notifications</Icon></ExpressiveIconButton>
      <ExpressiveBadge style={{ position: 'absolute', top: 2, insetInlineStart: 24 }}>5</ExpressiveBadge>
    </span>
    <span style={badged}>
      <ExpressiveIconButton color="filled" aria-label="Messages"><Icon>forum</Icon></ExpressiveIconButton>
      <ExpressiveBadge style={{ position: 'absolute', top: 2, insetInlineStart: 24 }}>28</ExpressiveBadge>
    </span>
  </div>
);
