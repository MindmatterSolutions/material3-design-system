import * as React from 'react';
import { OutlinedCard, FilledTonalButton, OutlinedButton, TextButton, Icon } from '@mindmatter/material-web-react';

const body: React.CSSProperties = { padding: 20, display: 'flex', flexDirection: 'column', gap: 8 };
const kicker: React.CSSProperties = { fontSize: 12, letterSpacing: 0.5, textTransform: 'uppercase', color: 'var(--md-sys-color-primary)' };
const title: React.CSSProperties = { margin: 0, fontSize: 20, fontWeight: 500, color: 'var(--md-sys-color-on-surface)' };
const text: React.CSSProperties = { margin: 0, fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' };

export const Trip = () => (
  <OutlinedCard style={{ maxWidth: 340 }}>
    <div style={body}>
      <div style={kicker}>Trip</div>
      <h4 style={title}>Cape Town · 3 nights</h4>
      <p style={text}>Check-in Friday 15:00. Your boarding passes are in the Saved tab.</p>
      <div style={{ marginTop: 8 }}>
        <OutlinedButton><Icon slot="icon">directions</Icon>Directions</OutlinedButton>
      </div>
    </div>
  </OutlinedCard>
);

export const WithActions = () => (
  <OutlinedCard style={{ maxWidth: 340 }}>
    <div style={body}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon style={{ color: 'var(--md-sys-color-primary)' }}>description</Icon>
        <div style={kicker}>Shared with you</div>
      </div>
      <h4 style={title}>Onboarding copy v3</h4>
      <p style={text}>Thabo asked for your review on six screens before Thursday's handoff.</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
        <TextButton>Later</TextButton>
        <FilledTonalButton>Review</FilledTonalButton>
      </div>
    </div>
  </OutlinedCard>
);

export const Options = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 180px))', gap: 16 }}>
    {[
      ['person', 'Solo', 'R 99 / mo', '1 seat · 50 GB'],
      ['groups', 'Team', 'R 349 / mo', '5 seats · 1 TB'],
      ['domain', 'Business', 'R 899 / mo', '20 seats · 5 TB'],
    ].map(([icon, label, value, note]) => (
      <OutlinedCard key={label}>
        <div style={{ ...body, padding: 16, gap: 4 }}>
          <Icon style={{ color: 'var(--md-sys-color-primary)' }}>{icon}</Icon>
          <div style={{ ...text, fontSize: 12 }}>{label}</div>
          <div style={{ fontSize: 20, fontWeight: 500, color: 'var(--md-sys-color-on-surface)' }}>{value}</div>
          <div style={{ ...text, fontSize: 12 }}>{note}</div>
        </div>
      </OutlinedCard>
    ))}
  </div>
);
