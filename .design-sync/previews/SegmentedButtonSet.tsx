import * as React from 'react';
import { SegmentedButtonSet, SegmentedButton, Icon } from '@mindmatter/material-web-react';

export const SingleSelect = () => (
  <SegmentedButtonSet aria-label="Calendar view">
    <SegmentedButton label="Day"><Icon slot="icon">today</Icon></SegmentedButton>
    <SegmentedButton label="Week" selected><Icon slot="icon">calendar_month</Icon></SegmentedButton>
    <SegmentedButton label="Month"><Icon slot="icon">event</Icon></SegmentedButton>
  </SegmentedButtonSet>
);

export const Multiselect = () => (
  <SegmentedButtonSet multiselect aria-label="Notify me by">
    <SegmentedButton label="Email" selected><Icon slot="icon">mail</Icon></SegmentedButton>
    <SegmentedButton label="SMS"><Icon slot="icon">call</Icon></SegmentedButton>
    <SegmentedButton label="Push" selected><Icon slot="icon">notifications</Icon></SegmentedButton>
  </SegmentedButtonSet>
);

export const IconOnly = () => (
  <SegmentedButtonSet multiselect aria-label="Text style">
    <SegmentedButton noCheckmark selected aria-label="Bold"><Icon slot="icon">format_bold</Icon></SegmentedButton>
    <SegmentedButton noCheckmark aria-label="Italic"><Icon slot="icon">format_italic</Icon></SegmentedButton>
    <SegmentedButton noCheckmark aria-label="Underline"><Icon slot="icon">format_underlined</Icon></SegmentedButton>
  </SegmentedButtonSet>
);

export const LabelOnly = () => (
  <SegmentedButtonSet aria-label="Delivery speed">
    <SegmentedButton label="Standard" selected />
    <SegmentedButton label="Express" />
    <SegmentedButton label="Same day" disabled />
  </SegmentedButtonSet>
);
