import * as React from 'react';
import { FilterChip, ChipSet, Icon } from '@mindmatter/material-web-react';

export const Selection = () => (
  <ChipSet>
    <FilterChip label="Open now" selected />
    <FilterChip label="Outdoor seating" />
    <FilterChip label="Pet friendly" />
  </ChipSet>
);

export const WithIcon = () => (
  <ChipSet>
    <FilterChip label="Wi-Fi" selected><Icon slot="icon">wifi</Icon></FilterChip>
    <FilterChip label="Top rated"><Icon slot="icon">star</Icon></FilterChip>
    <FilterChip label="Live music"><Icon slot="icon">music_note</Icon></FilterChip>
  </ChipSet>
);

export const ElevatedAndRemovable = () => (
  <ChipSet>
    <FilterChip label="Top rated" elevated><Icon slot="icon">star</Icon></FilterChip>
    <FilterChip label="Under R150" removable selected />
    <FilterChip label="Cape Town" removable />
  </ChipSet>
);

export const Disabled = () => (
  <ChipSet>
    <FilterChip label="Delivery" disabled />
    <FilterChip label="Open now" selected disabled />
  </ChipSet>
);
