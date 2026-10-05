import * as React from 'react';
import { ChipSet, SuggestionChip, Icon } from '@mindmatter/material-web-react';

export const QuickReplies = () => (
  <ChipSet>
    <SuggestionChip label="Sounds good" />
    <SuggestionChip label="Can we move it to Friday?" />
    <SuggestionChip label="I'll be 10 minutes late" />
  </ChipSet>
);

export const WithIcon = () => (
  <ChipSet>
    <SuggestionChip label="Send the agenda"><Icon slot="icon">checklist</Icon></SuggestionChip>
    <SuggestionChip label="Schedule follow-up"><Icon slot="icon">event</Icon></SuggestionChip>
    <SuggestionChip label="Attach notes"><Icon slot="icon">attach_file</Icon></SuggestionChip>
  </ChipSet>
);

export const Elevated = () => (
  <ChipSet>
    <SuggestionChip label="Weekend getaways" elevated><Icon slot="icon">luggage</Icon></SuggestionChip>
    <SuggestionChip label="Wine farms near me" elevated />
    <SuggestionChip label="Hiking trails" elevated><Icon slot="icon">hiking</Icon></SuggestionChip>
  </ChipSet>
);

export const Disabled = () => (
  <ChipSet>
    <SuggestionChip label="Translate" disabled><Icon slot="icon">translate</Icon></SuggestionChip>
    <SuggestionChip label="Summarise thread" elevated disabled />
    <SuggestionChip label="Mark as done" softDisabled />
  </ChipSet>
);
