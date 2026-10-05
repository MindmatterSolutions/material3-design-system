import * as React from 'react';
import { FilledCard, FilledTonalButton, OutlinedButton, TextButton, Icon } from '@mindmatter/material-web-react';

const body: React.CSSProperties = { padding: 20, display: 'flex', flexDirection: 'column', gap: 8 };
const kicker: React.CSSProperties = { fontSize: 12, letterSpacing: 0.5, textTransform: 'uppercase', color: 'var(--md-sys-color-primary)' };
const title: React.CSSProperties = { margin: 0, fontSize: 20, fontWeight: 500, color: 'var(--md-sys-color-on-surface)' };
const text: React.CSSProperties = { margin: 0, fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' };

export const Summary = () => (
  <FilledCard style={{ maxWidth: 340 }}>
    <div style={body}>
      <div style={kicker}>Weekly summary</div>
      <h4 style={title}>12 tasks closed</h4>
      <p style={text}>Up from 8 last week. Copy review is the one thing still holding the launch.</p>
      <div style={{ marginTop: 8 }}>
        <TextButton>Open report</TextButton>
      </div>
    </div>
  </FilledCard>
);

export const WithActions = () => (
  <FilledCard style={{ maxWidth: 340 }}>
    <div style={body}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon style={{ color: 'var(--md-sys-color-primary)' }}>savings</Icon>
        <div style={kicker}>Budget alert</div>
      </div>
      <h4 style={title}>Groceries at 85%</h4>
      <p style={text}>R 4 250 of R 5 000 spent with nine days left this month.</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
        <TextButton>Dismiss</TextButton>
        <FilledTonalButton>Adjust budget</FilledTonalButton>
      </div>
    </div>
  </FilledCard>
);

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 180px))', gap: 16 }}>
    {[
      ['directions_run', 'Steps', '8 412', 'Goal 10 000'],
      ['bedtime', 'Sleep', '7 h 20', 'Avg this week'],
      ['water_drop', 'Water', '1.6 L', '4 glasses to go'],
    ].map(([icon, label, value, note]) => (
      <FilledCard key={label}>
        <div style={{ ...body, padding: 16, gap: 4 }}>
          <Icon style={{ color: 'var(--md-sys-color-primary)' }}>{icon}</Icon>
          <div style={{ ...text, fontSize: 12 }}>{label}</div>
          <div style={{ fontSize: 24, fontWeight: 500, color: 'var(--md-sys-color-on-surface)' }}>{value}</div>
          <div style={{ ...text, fontSize: 12 }}>{note}</div>
        </div>
      </FilledCard>
    ))}
  </div>
);
