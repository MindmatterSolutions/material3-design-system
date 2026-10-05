import * as React from 'react';
import { ExpressiveIconButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const Colors = () => (
  <div style={row}>
    <ExpressiveIconButton aria-label="Search"><Icon>search</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" aria-label="Play"><Icon>play_arrow</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="tonal" aria-label="Microphone"><Icon>mic</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="outlined" aria-label="Settings"><Icon>settings</Icon></ExpressiveIconButton>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <ExpressiveIconButton color="filled" size="xs" aria-label="Play"><Icon>play_arrow</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" size="sm" aria-label="Play"><Icon>play_arrow</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" size="md" aria-label="Play"><Icon>play_arrow</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" size="lg" aria-label="Play"><Icon>play_arrow</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" size="xl" aria-label="Play"><Icon>play_arrow</Icon></ExpressiveIconButton>
  </div>
);

export const WidthAndShape = () => (
  <div style={row}>
    <ExpressiveIconButton color="tonal" size="md" width="narrow" aria-label="Previous track"><Icon>skip_previous</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" size="md" aria-label="Pause"><Icon>pause</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="tonal" size="md" width="wide" aria-label="Next track"><Icon>skip_next</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" size="md" square aria-label="Share"><Icon>share</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="outlined" size="md" square aria-label="Delete"><Icon>delete</Icon></ExpressiveIconButton>
  </div>
);

export const Toggle = () => (
  <div style={row}>
    <ExpressiveIconButton type="toggle" aria-label="Favourite"><Icon>favorite</Icon></ExpressiveIconButton>
    <ExpressiveIconButton type="toggle" selected aria-label="Favourite"><Icon>favorite</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" type="toggle" aria-label="Bookmark"><Icon>bookmark</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="filled" type="toggle" selected aria-label="Bookmark"><Icon>bookmark</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="tonal" type="toggle" aria-label="Notifications"><Icon>notifications</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="tonal" type="toggle" selected aria-label="Notifications"><Icon>notifications</Icon></ExpressiveIconButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <ExpressiveIconButton color="filled" disabled aria-label="Send"><Icon>send</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="tonal" disabled aria-label="Edit"><Icon>edit</Icon></ExpressiveIconButton>
    <ExpressiveIconButton color="outlined" softDisabled aria-label="Delete"><Icon>delete</Icon></ExpressiveIconButton>
    <ExpressiveIconButton softDisabled aria-label="More options"><Icon>more_vert</Icon></ExpressiveIconButton>
  </div>
);
