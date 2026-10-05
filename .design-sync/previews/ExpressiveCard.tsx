import * as React from 'react';
import { ExpressiveButton, ExpressiveCard, ExpressiveDivider, Icon } from '@mindmatter/material-web-react';

const body: React.CSSProperties = { padding: 20, display: 'flex', flexDirection: 'column', gap: 12 };
const head: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12 };
const meta: React.CSSProperties = { font: 'var(--md-sys-typescale-label-md)', color: 'var(--md-sys-color-on-surface-variant)' };
const title: React.CSSProperties = { margin: 0, font: 'var(--md-sys-typescale-title-md)', color: 'var(--md-sys-color-on-surface)' };
const text: React.CSSProperties = { margin: 0, font: 'var(--md-sys-typescale-body-md)', color: 'var(--md-sys-color-on-surface-variant)' };
const actions: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-end' };
const card: React.CSSProperties = { width: '100%', maxWidth: 360 };

export const Elevated = () => (
  <ExpressiveCard color="elevated" style={card}>
    <div style={body}>
      <div style={head}><Icon>mail</Icon><span style={meta}>Inbox · 09:42</span></div>
      <h4 style={title}>Quarterly review moved to Thursday</h4>
      <p style={text}>Lerato: the board pack is ready, but the venue clashes. Can we meet at 14:00 instead?</p>
      <div style={actions}>
        <ExpressiveButton color="text" type="button">Archive</ExpressiveButton>
        <ExpressiveButton color="filled" type="button"><Icon>send</Icon>Reply</ExpressiveButton>
      </div>
    </div>
  </ExpressiveCard>
);

export const FilledWithMedia = () => (
  <ExpressiveCard color="filled" style={card}>
    <div
      aria-hidden="true"
      style={{
        height: 132,
        display: 'grid',
        placeItems: 'center',
        background: 'var(--md-sys-color-tertiary-container)',
        color: 'var(--md-sys-color-on-tertiary-container)',
        ['--md-icon-size' as string]: '48px',
      }}
    >
      <Icon>music_note</Icon>
    </div>
    <div style={body}>
      <h4 style={title}>Late-night focus</h4>
      <p style={text}>24 tracks · 1 h 38 min · updated today</p>
      <div style={actions}>
        <ExpressiveButton color="tonal" type="button"><Icon>share</Icon>Share</ExpressiveButton>
        <ExpressiveButton color="filled" type="button"><Icon>play_arrow</Icon>Play</ExpressiveButton>
      </div>
    </div>
  </ExpressiveCard>
);

export const Outlined = () => (
  <ExpressiveCard color="outlined" style={card}>
    <div style={body}>
      <div style={head}><Icon>event</Icon><span style={meta}>Tomorrow · 10:00–11:00</span></div>
      <h4 style={title}>Design critique</h4>
      <p style={text}>Room 3 and online. Bring the onboarding flow and the new settings screens.</p>
      <ExpressiveDivider />
      <div style={actions}>
        <ExpressiveButton color="outlined" type="button">Decline</ExpressiveButton>
        <ExpressiveButton color="tonal" type="button"><Icon>check</Icon>Accept</ExpressiveButton>
      </div>
    </div>
  </ExpressiveCard>
);

export const Interactive = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
    <ExpressiveCard color="elevated" interactive aria-label="Open trip: Cape Town to Durban" style={{ width: '100%' }}>
      <div style={body}>
        <div style={head}><Icon>directions</Icon><span style={meta}>Trip · 3 stops</span></div>
        <h4 style={title}>Cape Town → Durban</h4>
        <p style={text}>Departs Friday 06:30 · 1 640 km</p>
      </div>
    </ExpressiveCard>
    <ExpressiveCard color="filled" interactive disabled aria-label="Archived trip" style={{ width: '100%' }}>
      <div style={body}>
        <div style={head}><Icon>folder</Icon><span style={meta}>Archived</span></div>
        <h4 style={title}>Johannesburg → Gqeberha</h4>
        <p style={text}>Completed in March · read only</p>
      </div>
    </ExpressiveCard>
  </div>
);
