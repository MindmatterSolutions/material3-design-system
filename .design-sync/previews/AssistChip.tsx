import * as React from 'react';
import { ChipSet, AssistChip, Icon } from '@mindmatter/material-web-react';

export const WithIcon = () => (
  <ChipSet>
    <AssistChip label="Add to calendar"><Icon slot="icon">event</Icon></AssistChip>
    <AssistChip label="Get directions"><Icon slot="icon">directions</Icon></AssistChip>
    <AssistChip label="Call venue"><Icon slot="icon">call</Icon></AssistChip>
  </ChipSet>
);

export const Elevated = () => (
  <ChipSet>
    <AssistChip label="Book a table" elevated><Icon slot="icon">restaurant</Icon></AssistChip>
    <AssistChip label="Order delivery" elevated><Icon slot="icon">delivery_dining</Icon></AssistChip>
    <AssistChip label="Save" elevated><Icon slot="icon">bookmark</Icon></AssistChip>
  </ChipSet>
);

export const LabelOnlyAndLink = () => (
  <ChipSet>
    <AssistChip label="Open menu" href="#menu" />
    <AssistChip label="View reviews" href="#reviews" />
    <AssistChip label="Opening hours" />
  </ChipSet>
);

export const Disabled = () => (
  <ChipSet>
    <AssistChip label="Share" disabled><Icon slot="icon">share</Icon></AssistChip>
    <AssistChip label="Reserve parking" elevated disabled><Icon slot="icon">local_parking</Icon></AssistChip>
    <AssistChip label="Order ahead" softDisabled><Icon slot="icon">shopping_bag</Icon></AssistChip>
  </ChipSet>
);
