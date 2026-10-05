import * as React from 'react';
import { FilledTonalIconButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <FilledTonalIconButton aria-label="Zoom in"><Icon>zoom_in</Icon></FilledTonalIconButton>
    <FilledTonalIconButton aria-label="Zoom out"><Icon>zoom_out</Icon></FilledTonalIconButton>
    <FilledTonalIconButton aria-label="My location"><Icon>my_location</Icon></FilledTonalIconButton>
    <FilledTonalIconButton aria-label="Layers"><Icon>layers</Icon></FilledTonalIconButton>
  </div>
);

export const Toggle = () => (
  <div style={row}>
    <FilledTonalIconButton toggle aria-label="Bookmark" ariaLabelSelected="Remove bookmark">
      <Icon>bookmark</Icon><Icon slot="selected">bookmark</Icon>
    </FilledTonalIconButton>
    <FilledTonalIconButton toggle selected aria-label="Bookmark" ariaLabelSelected="Remove bookmark">
      <Icon>bookmark</Icon><Icon slot="selected">bookmark</Icon>
    </FilledTonalIconButton>
    <FilledTonalIconButton toggle aria-label="Show captions" ariaLabelSelected="Hide captions">
      <Icon>closed_caption_disabled</Icon><Icon slot="selected">closed_caption</Icon>
    </FilledTonalIconButton>
    <FilledTonalIconButton toggle selected aria-label="Show captions" ariaLabelSelected="Hide captions">
      <Icon>closed_caption_disabled</Icon><Icon slot="selected">closed_caption</Icon>
    </FilledTonalIconButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <FilledTonalIconButton disabled aria-label="Zoom in"><Icon>zoom_in</Icon></FilledTonalIconButton>
    <FilledTonalIconButton softDisabled aria-label="Archive (read-only)"><Icon>archive</Icon></FilledTonalIconButton>
  </div>
);

export const MapControls = () => (
  <div style={{ width: 320, height: 200, position: 'relative', borderRadius: 16, background: 'var(--md-sys-color-surface-container-low)', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', left: 24, top: 24, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--md-sys-color-on-surface-variant)', fontSize: 14 }}>
      <Icon>location_on</Icon>Kloof Street, Cape Town
    </div>
    <div style={{ position: 'absolute', right: 12, bottom: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <FilledTonalIconButton aria-label="Zoom in"><Icon>add</Icon></FilledTonalIconButton>
      <FilledTonalIconButton aria-label="Zoom out"><Icon>remove</Icon></FilledTonalIconButton>
      <FilledTonalIconButton toggle selected aria-label="Follow my location" ariaLabelSelected="Stop following">
        <Icon>my_location</Icon><Icon slot="selected">my_location</Icon>
      </FilledTonalIconButton>
    </div>
  </div>
);
