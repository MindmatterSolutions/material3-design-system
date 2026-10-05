import * as React from 'react';
import { ElevatedCard, FilledTonalButton, TextButton, Icon } from '@mindmatter/material-web-react';

const body: React.CSSProperties = { padding: 20, display: 'flex', flexDirection: 'column', gap: 8 };
const kicker: React.CSSProperties = { fontSize: 12, letterSpacing: 0.5, textTransform: 'uppercase', color: 'var(--md-sys-color-primary)' };
const title: React.CSSProperties = { margin: 0, fontSize: 20, fontWeight: 500 };
const text: React.CSSProperties = { margin: 0, fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' };

export const EventCard = () => (
  <ElevatedCard style={{ maxWidth: 340 }}>
    <div style={body}>
      <div style={kicker}>Workshop</div>
      <h4 style={title}>Design tokens in practice</h4>
      <p style={text}>Two hours on naming, layering and theming. Bring a component you want to re-skin.</p>
      <div style={{ marginTop: 8 }}>
        <FilledTonalButton>Reserve seat</FilledTonalButton>
      </div>
    </div>
  </ElevatedCard>
);

export const WithActions = () => (
  <ElevatedCard style={{ maxWidth: 340 }}>
    <div style={body}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon style={{ color: 'var(--md-sys-color-primary)' }}>event</Icon>
        <div style={kicker}>Tomorrow · 09:30</div>
      </div>
      <h4 style={title}>Sprint planning</h4>
      <p style={text}>Room 4B and on video. Agenda: launch blockers, copy review, Q4 roadmap.</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
        <TextButton>Decline</TextButton>
        <FilledTonalButton>Accept</FilledTonalButton>
      </div>
    </div>
  </ElevatedCard>
);

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 180px))', gap: 16 }}>
    {[
      ['insights', 'Revenue', 'R 48.2k', '+12% this week'],
      ['groups', 'Active users', '1,284', '+86 since Monday'],
      ['check_circle', 'Tasks closed', '12', 'Up from 8 last week'],
    ].map(([icon, label, value, note]) => (
      <ElevatedCard key={label}>
        <div style={{ ...body, padding: 16, gap: 4 }}>
          <Icon style={{ color: 'var(--md-sys-color-primary)' }}>{icon}</Icon>
          <div style={{ ...text, fontSize: 12 }}>{label}</div>
          <div style={{ fontSize: 24, fontWeight: 500 }}>{value}</div>
          <div style={{ ...text, fontSize: 12 }}>{note}</div>
        </div>
      </ElevatedCard>
    ))}
  </div>
);
