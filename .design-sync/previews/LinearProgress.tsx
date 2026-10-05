import * as React from 'react';
import { LinearProgress } from '@mindmatter/material-web-react';

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 };
const label: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--md-sys-color-on-surface-variant)', marginBottom: 6 };
const full: React.CSSProperties = { width: '100%' };

export const Determinate = () => (
  <div style={col}>
    <div><div style={label}><span>Syncing photos</span><span>40%</span></div><LinearProgress style={full} value={0.4} aria-label="Sync 40%" /></div>
    <div><div style={label}><span>Onboarding</span><span>Step 7 of 10</span></div><LinearProgress style={full} value={7} max={10} aria-label="Step 7 of 10" /></div>
    <div><div style={label}><span>Backup complete</span><span>100%</span></div><LinearProgress style={full} value={1} aria-label="Backup complete" /></div>
  </div>
);

export const Buffer = () => (
  <div style={col}>
    <div><div style={label}><span>Midnight Drive</span><span>1:28 / 3:42</span></div><LinearProgress style={full} value={0.4} buffer={0.75} aria-label="Playback 40%, buffered 75%" /></div>
  </div>
);

export const Indeterminate = () => (
  <div style={col}>
    <div><div style={label}><span>Loading inbox</span></div><LinearProgress style={full} indeterminate aria-label="Loading" /></div>
    <div><div style={label}><span>Four colour</span></div><LinearProgress style={full} indeterminate fourColor aria-label="Loading" /></div>
  </div>
);
