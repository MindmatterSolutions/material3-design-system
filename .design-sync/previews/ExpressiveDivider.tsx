import * as React from 'react';
import {
  ExpressiveCard,
  ExpressiveDivider,
  ExpressiveIconButton,
  ExpressiveMenu,
  ExpressiveMenuItem,
  Icon,
} from '@mindmatter/material-web-react';

const text: React.CSSProperties = { margin: 0, font: 'var(--md-sys-typescale-body-md)', color: 'var(--md-sys-color-on-surface-variant)' };
const title: React.CSSProperties = { margin: 0, font: 'var(--md-sys-typescale-title-md)', color: 'var(--md-sys-color-on-surface)' };

export const Horizontal = () => (
  <ExpressiveCard color="outlined" style={{ width: '100%', maxWidth: 380 }}>
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h4 style={title}>Order #4821</h4>
      <p style={text}>2 × Filter coffee, 1 × Rooibos latte</p>
      <ExpressiveDivider />
      <div style={{ display: 'flex', justifyContent: 'space-between', ...text }}>
        <span>Total</span><span style={{ color: 'var(--md-sys-color-on-surface)' }}>R 112.00</span>
      </div>
      <ExpressiveDivider />
      <p style={text}>Ready for collection at 08:15</p>
    </div>
  </ExpressiveCard>
);

export const VerticalInToolbar = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 48 }}>
    <ExpressiveIconButton aria-label="Bold"><Icon>format_bold</Icon></ExpressiveIconButton>
    <ExpressiveIconButton aria-label="Italic"><Icon>format_italic</Icon></ExpressiveIconButton>
    <ExpressiveIconButton aria-label="Underline"><Icon>format_underlined</Icon></ExpressiveIconButton>
    <ExpressiveDivider vertical style={{ alignSelf: 'stretch' }} />
    <ExpressiveIconButton aria-label="Bulleted list"><Icon>format_list_bulleted</Icon></ExpressiveIconButton>
    <ExpressiveIconButton aria-label="Insert link"><Icon>link</Icon></ExpressiveIconButton>
    <ExpressiveDivider vertical style={{ alignSelf: 'stretch' }} />
    <ExpressiveIconButton aria-label="Undo"><Icon>undo</Icon></ExpressiveIconButton>
    <ExpressiveIconButton aria-label="Redo"><Icon>redo</Icon></ExpressiveIconButton>
  </div>
);

export const InMenu = () => {
  const ref = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    ref.current?.removeAttribute('popover');
  }, []);
  return (
    <ExpressiveMenu ref={ref} aria-label="Account" style={{ display: 'block', width: 260, maxWidth: '100%' }}>
      <ExpressiveMenuItem><Icon slot="leading">person</Icon>Profile</ExpressiveMenuItem>
      <ExpressiveMenuItem><Icon slot="leading">settings</Icon>Settings</ExpressiveMenuItem>
      <ExpressiveDivider className="divider" />
      <ExpressiveMenuItem><Icon slot="leading">help</Icon>Help &amp; feedback</ExpressiveMenuItem>
      <ExpressiveDivider className="divider" />
      <ExpressiveMenuItem><Icon slot="leading">logout</Icon>Sign out</ExpressiveMenuItem>
    </ExpressiveMenu>
  );
};
