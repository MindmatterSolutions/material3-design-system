import * as React from 'react';
import { ThemeRoot, IconButton, Icon, FilledButton, OutlinedButton, ElevatedCard, LinearProgress, CircularProgress } from '@mindmatter/material-web-react';

const App = () => (
  <>
    <header style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 12, borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
      <IconButton aria-label="Menu"><Icon>menu</Icon></IconButton>
      <div style={{ flex: 1, fontSize: 20, fontWeight: 500 }}>Projects</div>
      <IconButton aria-label="Search"><Icon>search</Icon></IconButton>
      <IconButton aria-label="Notifications"><Icon>notifications</Icon></IconButton>
    </header>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 16 }}>
      <ElevatedCard>
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 16, fontWeight: 500 }}>Website relaunch</div>
          <div style={{ fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' }}>7 of 10 milestones done · due 24 Oct</div>
          <LinearProgress value={0.7} style={{ width: '100%' }} aria-label="70% complete" />
        </div>
      </ElevatedCard>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <OutlinedButton>Archive</OutlinedButton>
        <FilledButton><Icon slot="icon">add</Icon>New task</FilledButton>
      </div>
    </div>
  </>
);

export const AppShell = () => (
  <ThemeRoot style={{ padding: 20, maxWidth: 440, borderRadius: 16, border: '1px solid var(--md-sys-color-outline-variant)' }}>
    <App />
  </ThemeRoot>
);

export const SettingsPanel = () => (
  <ThemeRoot style={{ padding: 20, maxWidth: 440, borderRadius: 16, border: '1px solid var(--md-sys-color-outline-variant)' }}>
    <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Storage</div>
    <div style={{ fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)', marginBottom: 16 }}>Your photos and backups are synced across devices.</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <CircularProgress value={0.62} aria-label="62% used" />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16 }}>62 GB of 100 GB used</div>
        <div style={{ fontSize: 12, color: 'var(--md-sys-color-on-surface-variant)' }}>Photos 41 GB · Backups 21 GB</div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 20 }}>
      <OutlinedButton>Manage</OutlinedButton>
      <FilledButton>Upgrade storage</FilledButton>
    </div>
  </ThemeRoot>
);
