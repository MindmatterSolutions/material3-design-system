import * as React from 'react';
import { Slider } from '@mindmatter/material-web-react';

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 4, width: 320 };
const head: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--md-sys-color-on-surface-variant)' };
const val: React.CSSProperties = { color: 'var(--md-sys-color-on-surface)' };
const full: React.CSSProperties = { width: '100%' };

export const Continuous = () => (
  <div style={col}>
    <div style={head}><span>Speaker volume</span><span style={val}>40%</span></div>
    <Slider value={40} aria-label="Speaker volume" style={full} />
  </div>
);

export const Discrete = () => (
  <div style={col}>
    <div style={head}><span>Spice level</span><span style={val}>3 of 5</span></div>
    <Slider min={0} max={5} step={1} value={3} ticks labeled aria-label="Spice level" style={full} />
  </div>
);

export const Range = () => (
  <div style={col}>
    <div style={head}><span>Price range</span><span style={val}>R200 – R1,400</span></div>
    <Slider range min={0} max={2000} step={50} valueStart={200} valueEnd={1400} labeled
      valueLabelStart="R200" valueLabelEnd="R1.4k" ariaLabelStart="Minimum price" ariaLabelEnd="Maximum price" style={full} />
  </div>
);

export const Disabled = () => (
  <div style={col}>
    <div style={head}><span>Brightness (locked)</span><span style={val}>65%</span></div>
    <Slider value={65} disabled aria-label="Brightness" style={full} />
  </div>
);
