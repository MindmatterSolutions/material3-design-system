import * as React from 'react';
import { IconButton, FilledIconButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' };

export const Plain = () => (
  <div style={row}>
    <IconButton aria-label="Back"><Icon>arrow_back</Icon></IconButton>
    <IconButton aria-label="Search"><Icon>search</Icon></IconButton>
    <IconButton aria-label="Share"><Icon>share</Icon></IconButton>
    <IconButton aria-label="More options"><Icon>more_vert</Icon></IconButton>
  </div>
);

export const Toggle = () => (
  <div style={row}>
    <IconButton toggle aria-label="Add to favourites" ariaLabelSelected="Remove from favourites">
      <Icon>favorite</Icon><Icon slot="selected">favorite</Icon>
    </IconButton>
    <IconButton toggle selected aria-label="Add to favourites" ariaLabelSelected="Remove from favourites">
      <Icon>favorite</Icon><Icon slot="selected">favorite</Icon>
    </IconButton>
    <IconButton toggle selected aria-label="Bookmark" ariaLabelSelected="Remove bookmark">
      <Icon>bookmark</Icon><Icon slot="selected">bookmark</Icon>
    </IconButton>
  </div>
);

export const FormattingToolbar = () => (
  <div style={{ ...row, gap: 4 }}>
    <IconButton toggle selected aria-label="Bold"><Icon>format_bold</Icon></IconButton>
    <IconButton toggle aria-label="Italic"><Icon>format_italic</Icon></IconButton>
    <IconButton toggle aria-label="Underline"><Icon>format_underlined</Icon></IconButton>
    <IconButton aria-label="Undo"><Icon>undo</Icon></IconButton>
    <IconButton aria-label="Redo"><Icon>redo</Icon></IconButton>
  </div>
);

export const MediaControls = () => (
  <div style={{ ...row, gap: 4 }}>
    <IconButton aria-label="Back 10 seconds"><Icon>replay_10</Icon></IconButton>
    <IconButton aria-label="Previous track"><Icon>skip_previous</Icon></IconButton>
    <FilledIconButton toggle selected aria-label="Play" ariaLabelSelected="Pause">
      <Icon>play_arrow</Icon><Icon slot="selected">pause</Icon>
    </FilledIconButton>
    <IconButton aria-label="Next track"><Icon>skip_next</Icon></IconButton>
    <IconButton aria-label="Forward 10 seconds"><Icon>forward_10</Icon></IconButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <IconButton disabled aria-label="More options"><Icon>more_vert</Icon></IconButton>
    <IconButton softDisabled aria-label="Delete (no permission)"><Icon>delete</Icon></IconButton>
  </div>
);
