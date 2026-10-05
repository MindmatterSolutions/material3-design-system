import * as React from 'react';
import { ExpressiveMenu, ExpressiveMenuGroup, ExpressiveMenuItem, Icon } from '@mindmatter/material-web-react';

// md-gb-menu sets popover="auto" on connect; drop it so the menu renders open in flow.
function useInFlow() {
  const ref = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    ref.current?.removeAttribute('popover');
  }, []);
  return ref;
}

const menuStyle: React.CSSProperties = { display: 'block', width: 300, maxWidth: '100%' };

export const LeadingAndShortcut = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="Edit" style={menuStyle}>
      <ExpressiveMenuItem><Icon slot="leading">content_cut</Icon>Cut<span slot="trailing-text">⌘X</span></ExpressiveMenuItem>
      <ExpressiveMenuItem><Icon slot="leading">content_copy</Icon>Copy<span slot="trailing-text">⌘C</span></ExpressiveMenuItem>
      <ExpressiveMenuItem><Icon slot="leading">content_paste</Icon>Paste<span slot="trailing-text">⌘V</span></ExpressiveMenuItem>
      <ExpressiveMenuItem>Select all<span slot="trailing-text">⌘A</span></ExpressiveMenuItem>
    </ExpressiveMenu>
  );
};

export const SupportingAndTrailing = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="Share" style={menuStyle}>
      <ExpressiveMenuItem>
        <Icon slot="leading">group_add</Icon>
        Invite people
        <span slot="supporting-text">They can edit and comment</span>
      </ExpressiveMenuItem>
      <ExpressiveMenuItem>
        <Icon slot="leading">link</Icon>
        Copy link
        <span slot="supporting-text">Anyone at Mindmatter</span>
      </ExpressiveMenuItem>
      <ExpressiveMenuItem>
        <Icon slot="leading">ios_share</Icon>
        Send a copy
        <Icon slot="trailing">chevron_right</Icon>
      </ExpressiveMenuItem>
    </ExpressiveMenu>
  );
};

export const States = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="View" style={menuStyle}>
      <ExpressiveMenuGroup checkable="single">
        <ExpressiveMenuItem checked><Icon slot="leading">view_list</Icon>List view</ExpressiveMenuItem>
        <ExpressiveMenuItem><Icon slot="leading">grid_view</Icon>Grid view</ExpressiveMenuItem>
        <ExpressiveMenuItem disabled><Icon slot="leading">view_timeline</Icon>Timeline<span slot="supporting-text">Needs a date column</span></ExpressiveMenuItem>
      </ExpressiveMenuGroup>
    </ExpressiveMenu>
  );
};
