import * as React from 'react';
import { SegmentedButtonSet, SegmentedButton, Icon } from '@mindmatter/material-web-react';

export const Selected = () => (
  <SegmentedButtonSet aria-label="Sort by">
    <SegmentedButton label="Newest" selected />
    <SegmentedButton label="Popular" />
    <SegmentedButton label="Price" />
  </SegmentedButtonSet>
);

export const WithIcon = () => (
  <SegmentedButtonSet aria-label="Travel mode">
    <SegmentedButton label="Drive" selected><Icon slot="icon">directions_car</Icon></SegmentedButton>
    <SegmentedButton label="Transit"><Icon slot="icon">directions_bus</Icon></SegmentedButton>
    <SegmentedButton label="Walk"><Icon slot="icon">directions_walk</Icon></SegmentedButton>
  </SegmentedButtonSet>
);

export const Disabled = () => (
  <SegmentedButtonSet aria-label="Shipping size">
    <SegmentedButton label="Small" />
    <SegmentedButton label="Medium" selected />
    <SegmentedButton label="Large" disabled />
  </SegmentedButtonSet>
);

export const NoCheckmark = () => (
  <SegmentedButtonSet multiselect aria-label="Text alignment and style">
    <SegmentedButton noCheckmark selected aria-label="Align left"><Icon slot="icon">format_align_left</Icon></SegmentedButton>
    <SegmentedButton noCheckmark aria-label="Align centre"><Icon slot="icon">format_align_center</Icon></SegmentedButton>
    <SegmentedButton noCheckmark aria-label="Align right"><Icon slot="icon">format_align_right</Icon></SegmentedButton>
  </SegmentedButtonSet>
);

export const MultiselectFilters = () => (
  <SegmentedButtonSet multiselect aria-label="Amenities">
    <SegmentedButton label="Wi-Fi" selected><Icon slot="icon">wifi</Icon></SegmentedButton>
    <SegmentedButton label="Parking" selected><Icon slot="icon">local_parking</Icon></SegmentedButton>
    <SegmentedButton label="Pool"><Icon slot="icon">pool</Icon></SegmentedButton>
    <SegmentedButton label="Pets"><Icon slot="icon">pets</Icon></SegmentedButton>
  </SegmentedButtonSet>
);
