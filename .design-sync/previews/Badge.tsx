import * as React from 'react';
import { Badge, Icon, IconButton } from '@mindmatter/material-web-react';

// md-badge places itself against the nearest position:relative parent.
const badged: React.CSSProperties = { position: 'relative', display: 'inline-flex', padding: 8 };
const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' };
const fig: React.CSSProperties = {
  margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
  fontSize: 12, color: 'var(--md-sys-color-on-surface-variant)',
};

export const Dot = () => (
  <div style={row}>
    <figure style={fig}><span style={badged}><Icon>notifications</Icon><Badge /></span>Alerts</figure>
    <figure style={fig}><span style={badged}><Icon>chat</Icon><Badge /></span>Chat</figure>
    <figure style={fig}><span style={badged}><Icon>system_update</Icon><Badge /></span>Updates</figure>
  </div>
);

export const Values = () => (
  <div style={row}>
    <figure style={fig}><span style={badged}><Icon>mail</Icon><Badge value="3" /></span>Inbox</figure>
    <figure style={fig}><span style={badged}><Icon>groups</Icon><Badge value="24" /></span>Invites</figure>
    <figure style={fig}><span style={badged}><Icon>checklist</Icon><Badge value="999+" /></span>Tasks</figure>
  </div>
);

export const OnIconButtons = () => (
  <div style={{ ...row, gap: 8 }}>
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      <IconButton aria-label="Notifications"><Icon>notifications</Icon></IconButton>
      <Badge />
    </span>
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      <IconButton aria-label="Shopping cart"><Icon>shopping_cart</Icon></IconButton>
      <Badge value="2" />
    </span>
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      <IconButton aria-label="Messages"><Icon>forum</Icon></IconButton>
      <Badge value="47" />
    </span>
  </div>
);
