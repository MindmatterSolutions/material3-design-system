import * as React from 'react';
import { ChipSet, InputChip, Icon } from '@mindmatter/material-web-react';

export const WithIcon = () => (
  <ChipSet>
    <InputChip label="Design team"><Icon slot="icon">groups</Icon></InputChip>
    <InputChip label="Cape Town"><Icon slot="icon">location_on</Icon></InputChip>
    <InputChip label="Q3-review.pdf"><Icon slot="icon">description</Icon></InputChip>
  </ChipSet>
);

export const Avatar = () => (
  <ChipSet>
    <InputChip label="Thandi Mokoena" avatar><Icon slot="icon">person</Icon></InputChip>
    <InputChip label="Sipho Ndlovu" avatar><Icon slot="icon">person</Icon></InputChip>
    <InputChip label="Lerato Khumalo" avatar><Icon slot="icon">face</Icon></InputChip>
  </ChipSet>
);

export const SelectedAndRemoveOnly = () => (
  <ChipSet>
    <InputChip label="Budget 2026.xlsx" selected><Icon slot="icon">table_chart</Icon></InputChip>
    <InputChip label="Urgent" selected />
    <InputChip label="Pinned" removeOnly />
    <InputChip label="Draft" />
  </ChipSet>
);

export const Disabled = () => (
  <ChipSet>
    <InputChip label="Archived" disabled />
    <InputChip label="Finance" disabled><Icon slot="icon">account_balance</Icon></InputChip>
    <InputChip label="Read only" softDisabled />
  </ChipSet>
);
