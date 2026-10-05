import * as React from 'react';
import { ExpressiveFab, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' };

export const Colors = () => (
  <div style={row}>
    <ExpressiveFab aria-label="Compose"><Icon>edit</Icon></ExpressiveFab>
    <ExpressiveFab color="primary" aria-label="Add"><Icon>add</Icon></ExpressiveFab>
    <ExpressiveFab color="secondary-container" aria-label="Favourite"><Icon>favorite</Icon></ExpressiveFab>
    <ExpressiveFab color="secondary" aria-label="Take photo"><Icon>photo_camera</Icon></ExpressiveFab>
    <ExpressiveFab color="tertiary-container" aria-label="Record"><Icon>mic</Icon></ExpressiveFab>
    <ExpressiveFab color="tertiary" aria-label="Add music"><Icon>music_note</Icon></ExpressiveFab>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <ExpressiveFab color="primary" aria-label="Add"><Icon>add</Icon></ExpressiveFab>
    <ExpressiveFab color="primary" size="md" aria-label="Add"><Icon>add</Icon></ExpressiveFab>
    <ExpressiveFab color="primary" size="lg" aria-label="Add"><Icon>add</Icon></ExpressiveFab>
  </div>
);

export const Extended = () => (
  <div style={{ ...row, flexDirection: 'column', alignItems: 'flex-start' }}>
    <ExpressiveFab><Icon>edit</Icon>Compose</ExpressiveFab>
    <ExpressiveFab color="secondary-container" size="md"><Icon>directions</Icon>Start route</ExpressiveFab>
    <ExpressiveFab color="tertiary" size="lg"><Icon>add</Icon>New list</ExpressiveFab>
  </div>
);
