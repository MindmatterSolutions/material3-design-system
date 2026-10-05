import * as React from 'react';
import { FilledSelect, SelectOption, Icon } from '@mindmatter/material-web-react';

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 };

export const Preselected = () => (
  <div style={col}>
    <FilledSelect label="Country">
      <SelectOption value="bw"><div slot="headline">Botswana</div></SelectOption>
      <SelectOption value="ke"><div slot="headline">Kenya</div></SelectOption>
      <SelectOption value="na"><div slot="headline">Namibia</div></SelectOption>
      <SelectOption value="za" selected><div slot="headline">South Africa</div></SelectOption>
      <SelectOption value="zm"><div slot="headline">Zambia</div></SelectOption>
    </FilledSelect>
    <FilledSelect label="Reminder" value="10" supportingText="We'll notify you on this device">
      <SelectOption value="0"><div slot="headline">None</div></SelectOption>
      <SelectOption value="10"><div slot="headline">10 minutes before</div></SelectOption>
      <SelectOption value="60"><div slot="headline">1 hour before</div></SelectOption>
      <SelectOption value="1440"><div slot="headline">1 day before</div></SelectOption>
    </FilledSelect>
  </div>
);

export const Empty = () => (
  <div style={col}>
    <FilledSelect label="Calendar" supportingText="Where the event will be saved">
      <SelectOption value="team"><div slot="headline">Design team</div></SelectOption>
      <SelectOption value="company"><div slot="headline">Company-wide</div></SelectOption>
      <SelectOption value="personal"><div slot="headline">Personal</div></SelectOption>
    </FilledSelect>
  </div>
);

export const WithLeadingIcon = () => (
  <div style={col}>
    <FilledSelect label="Time zone" value="jnb">
      <Icon slot="leading-icon">schedule</Icon>
      <SelectOption value="lon"><div slot="headline">London (GMT+1)</div></SelectOption>
      <SelectOption value="jnb"><div slot="headline">Johannesburg (GMT+2)</div></SelectOption>
      <SelectOption value="nbo"><div slot="headline">Nairobi (GMT+3)</div></SelectOption>
    </FilledSelect>
  </div>
);

export const States = () => (
  <div style={col}>
    <FilledSelect label="Size" required error errorText="Choose a size to continue">
      <SelectOption value=""></SelectOption>
      <SelectOption value="s"><div slot="headline">Small</div></SelectOption>
      <SelectOption value="m"><div slot="headline">Medium</div></SelectOption>
      <SelectOption value="l"><div slot="headline">Large</div></SelectOption>
    </FilledSelect>
    <FilledSelect label="Warehouse" value="cpt" disabled>
      <SelectOption value="cpt"><div slot="headline">Cape Town</div></SelectOption>
      <SelectOption value="jhb"><div slot="headline">Johannesburg</div></SelectOption>
    </FilledSelect>
  </div>
);
