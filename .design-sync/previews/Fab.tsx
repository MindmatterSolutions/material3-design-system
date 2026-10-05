import * as React from 'react';
import { Fab, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' };

export const Variants = () => (
  <div style={row}>
    <Fab aria-label="Edit"><Icon slot="icon">edit</Icon></Fab>
    <Fab variant="primary" aria-label="Edit"><Icon slot="icon">edit</Icon></Fab>
    <Fab variant="secondary" aria-label="Edit"><Icon slot="icon">edit</Icon></Fab>
    <Fab variant="tertiary" aria-label="Edit"><Icon slot="icon">edit</Icon></Fab>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <Fab size="small" variant="primary" aria-label="Add"><Icon slot="icon">add</Icon></Fab>
    <Fab variant="primary" aria-label="Add"><Icon slot="icon">add</Icon></Fab>
    <Fab size="large" variant="primary" aria-label="Add"><Icon slot="icon">add</Icon></Fab>
  </div>
);

export const Extended = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
    <Fab variant="primary" label="Compose"><Icon slot="icon">edit</Icon></Fab>
    <Fab variant="tertiary" label="Navigate"><Icon slot="icon">navigation</Icon></Fab>
    <Fab label="Reply all" />
  </div>
);

export const Lowered = () => (
  <div style={row}>
    <Fab lowered aria-label="New message"><Icon slot="icon">mail</Icon></Fab>
    <Fab lowered variant="secondary" label="New event"><Icon slot="icon">event</Icon></Fab>
  </div>
);
