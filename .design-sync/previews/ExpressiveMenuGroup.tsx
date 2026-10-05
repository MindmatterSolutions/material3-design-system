import * as React from 'react';
import {
  ExpressiveDivider,
  ExpressiveMenu,
  ExpressiveMenuGroup,
  ExpressiveMenuItem,
  Icon,
} from '@mindmatter/material-web-react';

// md-gb-menu sets popover="auto" on connect; drop it so the menu renders open in flow.
function useInFlow() {
  const ref = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    ref.current?.removeAttribute('popover');
  }, []);
  return ref;
}

const menuStyle: React.CSSProperties = { display: 'block', width: 280, maxWidth: '100%' };

export const ActionGroups = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="File actions" style={menuStyle}>
      <ExpressiveMenuGroup>
        <ExpressiveMenuItem><Icon slot="leading">content_copy</Icon>Make a copy</ExpressiveMenuItem>
        <ExpressiveMenuItem><Icon slot="leading">drive_file_rename_outline</Icon>Rename</ExpressiveMenuItem>
        <ExpressiveMenuItem><Icon slot="leading">download</Icon>Download</ExpressiveMenuItem>
      </ExpressiveMenuGroup>
      <ExpressiveDivider className="divider" />
      <ExpressiveMenuGroup>
        <ExpressiveMenuItem><Icon slot="leading">share</Icon>Share</ExpressiveMenuItem>
        <ExpressiveMenuItem><Icon slot="leading">link</Icon>Copy link</ExpressiveMenuItem>
      </ExpressiveMenuGroup>
    </ExpressiveMenu>
  );
};

export const SingleSelect = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="Text size" style={menuStyle}>
      <ExpressiveMenuGroup checkable="single">
        <ExpressiveMenuItem>Small</ExpressiveMenuItem>
        <ExpressiveMenuItem checked>Default</ExpressiveMenuItem>
        <ExpressiveMenuItem>Large</ExpressiveMenuItem>
        <ExpressiveMenuItem>Extra large</ExpressiveMenuItem>
      </ExpressiveMenuGroup>
    </ExpressiveMenu>
  );
};

export const MultipleSelect = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="Columns" style={menuStyle}>
      <ExpressiveMenuGroup checkable="multiple">
        <ExpressiveMenuItem checked>Owner</ExpressiveMenuItem>
        <ExpressiveMenuItem checked>Last modified</ExpressiveMenuItem>
        <ExpressiveMenuItem>File size</ExpressiveMenuItem>
        <ExpressiveMenuItem>Location</ExpressiveMenuItem>
      </ExpressiveMenuGroup>
    </ExpressiveMenu>
  );
};
