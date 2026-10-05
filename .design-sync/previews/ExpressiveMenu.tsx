import * as React from 'react';
import {
  ExpressiveDivider,
  ExpressiveMenu,
  ExpressiveMenuGroup,
  ExpressiveMenuItem,
  Icon,
} from '@mindmatter/material-web-react';

// md-gb-menu sets popover="auto" in connectedCallback, which hides it until
// showPopover(). For a static open preview we drop the attribute after mount
// so the menu renders in normal flow (same approach as the showcase).
function useInFlow() {
  const ref = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    ref.current?.removeAttribute('popover');
  }, []);
  return ref;
}

const menuStyle: React.CSSProperties = { display: 'block', width: 280, maxWidth: '100%' };

export const MessageActions = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="Message actions" style={menuStyle}>
      <ExpressiveMenuGroup>
        <ExpressiveMenuItem><Icon slot="leading">send</Icon>Reply<span slot="trailing-text">R</span></ExpressiveMenuItem>
        <ExpressiveMenuItem><Icon slot="leading">share</Icon>Forward<span slot="trailing-text">F</span></ExpressiveMenuItem>
        <ExpressiveMenuItem><Icon slot="leading">bookmark</Icon>Save for later<span slot="supporting-text">Back in your inbox tomorrow</span></ExpressiveMenuItem>
      </ExpressiveMenuGroup>
      <ExpressiveDivider className="divider" />
      <ExpressiveMenuGroup checkable="single">
        <ExpressiveMenuItem checked>Sort by date</ExpressiveMenuItem>
        <ExpressiveMenuItem>Sort by sender</ExpressiveMenuItem>
      </ExpressiveMenuGroup>
      <ExpressiveDivider className="divider" />
      <ExpressiveMenuItem disabled><Icon slot="leading">delete</Icon>Delete</ExpressiveMenuItem>
    </ExpressiveMenu>
  );
};

export const VibrantFilters = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} color="vibrant" aria-label="Show" style={menuStyle}>
      <ExpressiveMenuGroup checkable="multiple">
        <ExpressiveMenuItem checked>Unread</ExpressiveMenuItem>
        <ExpressiveMenuItem checked>Starred</ExpressiveMenuItem>
        <ExpressiveMenuItem>Attachments</ExpressiveMenuItem>
      </ExpressiveMenuGroup>
      <ExpressiveDivider className="divider" />
      <ExpressiveMenuItem><Icon slot="leading">restart_alt</Icon>Reset filters</ExpressiveMenuItem>
    </ExpressiveMenu>
  );
};

export const NoteOptions = () => {
  const ref = useInFlow();
  return (
    <ExpressiveMenu ref={ref} aria-label="Note options" style={menuStyle}>
      <ExpressiveMenuItem><Icon slot="leading">edit</Icon>Edit</ExpressiveMenuItem>
      <ExpressiveMenuItem><Icon slot="leading">star</Icon>Pin to top</ExpressiveMenuItem>
      <ExpressiveMenuItem><Icon slot="leading">download</Icon>Export as PDF</ExpressiveMenuItem>
      <ExpressiveMenuItem><Icon slot="leading">share</Icon>Share</ExpressiveMenuItem>
    </ExpressiveMenu>
  );
};
