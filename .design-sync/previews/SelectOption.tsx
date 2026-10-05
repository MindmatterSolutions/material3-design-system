import * as React from 'react';
import { OutlinedSelect, FilledSelect, SelectOption, Icon } from '@mindmatter/material-web-react';

// Hold the select's option menu open so the options themselves are visible.
function useOpen() {
  const ref = React.useRef<any>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = setTimeout(() => el.showPicker?.(), 50);
    return () => clearTimeout(t);
  }, []);
  return ref;
}

const host: React.CSSProperties = { position: 'relative', maxWidth: 360, minHeight: 380 };

export const IconsAndSupportingText = () => {
  const ref = useOpen();
  return (
    <div style={host}>
      <OutlinedSelect ref={ref} label="Shipping speed" value="express" quick menuPositioning="absolute" style={{ width: 320 }}>
        <SelectOption value="standard">
          <Icon slot="start">local_shipping</Icon>
          <div slot="headline">Standard</div>
          <div slot="supporting-text">3–5 working days</div>
          <div slot="trailing-supporting-text">Free</div>
        </SelectOption>
        <SelectOption value="express">
          <Icon slot="start">bolt</Icon>
          <div slot="headline">Express</div>
          <div slot="supporting-text">1–2 working days</div>
          <div slot="trailing-supporting-text">R95</div>
        </SelectOption>
        <SelectOption value="same-day">
          <Icon slot="start">rocket_launch</Icon>
          <div slot="headline">Same day</div>
          <div slot="supporting-text">Order before 11:00</div>
          <div slot="trailing-supporting-text">R180</div>
        </SelectOption>
        <SelectOption value="collect" disabled>
          <Icon slot="start">storefront</Icon>
          <div slot="headline">Collect in store</div>
          <div slot="supporting-text">Unavailable for this address</div>
        </SelectOption>
      </OutlinedSelect>
    </div>
  );
};

export const EndIconAndOverline = () => {
  const ref = useOpen();
  return (
    <div style={host}>
      <FilledSelect ref={ref} label="Workspace" value="design" quick menuPositioning="absolute" style={{ width: 320 }}>
        <SelectOption value="design">
          <div slot="overline">Mindmatter</div>
          <div slot="headline">Design</div>
          <Icon slot="end">check</Icon>
        </SelectOption>
        <SelectOption value="eng">
          <div slot="overline">Mindmatter</div>
          <div slot="headline">Engineering</div>
          <Icon slot="end">lock</Icon>
        </SelectOption>
        <SelectOption value="ops">
          <div slot="overline">Partner</div>
          <div slot="headline">Operations</div>
          <Icon slot="end">open_in_new</Icon>
        </SelectOption>
        <SelectOption value="legacy" disabled>
          <div slot="overline">Archived</div>
          <div slot="headline">Legacy projects</div>
        </SelectOption>
      </FilledSelect>
    </div>
  );
};

export const DisplayTextWhenSelected = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
    <OutlinedSelect label="Currency">
      <SelectOption value="usd" displayText="USD"><div slot="headline">US dollar</div></SelectOption>
      <SelectOption value="zar" displayText="ZAR" selected><div slot="headline">South African rand</div></SelectOption>
      <SelectOption value="kes" displayText="KES"><div slot="headline">Kenyan shilling</div></SelectOption>
    </OutlinedSelect>
    <FilledSelect label="Plan">
      <SelectOption value="free"><div slot="headline">Free</div></SelectOption>
      <SelectOption value="team" selected><div slot="headline">Team</div></SelectOption>
      <SelectOption value="ent" disabled><div slot="headline">Enterprise</div></SelectOption>
    </FilledSelect>
  </div>
);
