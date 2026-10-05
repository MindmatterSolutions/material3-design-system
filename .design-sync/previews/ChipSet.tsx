import * as React from 'react';
import { ChipSet, AssistChip, FilterChip, InputChip, SuggestionChip, Icon } from '@mindmatter/material-web-react';

export const AssistChips = () => (
  <ChipSet>
    <AssistChip label="Add to calendar"><Icon slot="icon">event</Icon></AssistChip>
    <AssistChip label="Get directions"><Icon slot="icon">directions</Icon></AssistChip>
    <AssistChip label="Call venue" elevated><Icon slot="icon">call</Icon></AssistChip>
    <AssistChip label="Share" disabled><Icon slot="icon">share</Icon></AssistChip>
  </ChipSet>
);

export const FilterChips = () => (
  <ChipSet>
    <FilterChip label="Open now" selected />
    <FilterChip label="Wi-Fi" selected><Icon slot="icon">wifi</Icon></FilterChip>
    <FilterChip label="Outdoor seating" />
    <FilterChip label="Top rated"><Icon slot="icon">star</Icon></FilterChip>
  </ChipSet>
);

export const InputChips = () => (
  <ChipSet>
    <InputChip label="Thandi Mokoena" avatar><Icon slot="icon">person</Icon></InputChip>
    <InputChip label="Design team"><Icon slot="icon">groups</Icon></InputChip>
    <InputChip label="Cape Town"><Icon slot="icon">location_on</Icon></InputChip>
    <InputChip label="Q3-review.pdf" />
  </ChipSet>
);

export const SuggestionChips = () => (
  <ChipSet>
    <SuggestionChip label="Sounds good" />
    <SuggestionChip label="Can we move it to Friday?" />
    <SuggestionChip label="Send the agenda"><Icon slot="icon">checklist</Icon></SuggestionChip>
  </ChipSet>
);
