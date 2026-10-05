import * as React from 'react';
import { OutlinedSelect, SelectOption } from '@mindmatter/material-web-react';

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 };

export const Preselected = () => (
  <div style={col}>
    <OutlinedSelect label="Shipping speed" value="express" supportingText="Express arrives in 1–2 working days">
      <SelectOption value="standard"><div slot="headline">Standard</div></SelectOption>
      <SelectOption value="express"><div slot="headline">Express</div></SelectOption>
      <SelectOption value="same-day"><div slot="headline">Same day</div></SelectOption>
      <SelectOption value="collect" disabled><div slot="headline">Collect in store</div></SelectOption>
    </OutlinedSelect>
    <OutlinedSelect label="Country">
      <SelectOption value="bw"><div slot="headline">Botswana</div></SelectOption>
      <SelectOption value="ke"><div slot="headline">Kenya</div></SelectOption>
      <SelectOption value="za" selected><div slot="headline">South Africa</div></SelectOption>
      <SelectOption value="zm"><div slot="headline">Zambia</div></SelectOption>
    </OutlinedSelect>
  </div>
);

export const Empty = () => (
  <div style={col}>
    <OutlinedSelect label="Duration" supportingText="How long the event runs">
      <SelectOption value="30"><div slot="headline">30 minutes</div></SelectOption>
      <SelectOption value="60"><div slot="headline">1 hour</div></SelectOption>
      <SelectOption value="90"><div slot="headline">1 hour 30</div></SelectOption>
    </OutlinedSelect>
  </div>
);

export const States = () => (
  <div style={col}>
    <OutlinedSelect label="Size" required error errorText="Choose a size to continue">
      <SelectOption value=""></SelectOption>
      <SelectOption value="s"><div slot="headline">Small</div></SelectOption>
      <SelectOption value="m"><div slot="headline">Medium</div></SelectOption>
      <SelectOption value="l"><div slot="headline">Large</div></SelectOption>
    </OutlinedSelect>
    <OutlinedSelect label="Warehouse" value="cpt" disabled>
      <SelectOption value="cpt"><div slot="headline">Cape Town</div></SelectOption>
      <SelectOption value="jhb"><div slot="headline">Johannesburg</div></SelectOption>
    </OutlinedSelect>
  </div>
);
