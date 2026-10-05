import * as React from 'react';
import { Dialog, Icon, TextButton, FilledTonalButton } from '@mindmatter/material-web-react';

export const ScheduleMeeting = () => (
  <Dialog open quick>
    <div slot="headline">Schedule a meeting</div>
    <form slot="content" id="dlg-schedule-form" method="dialog">
      <p style={{ margin: 0 }}>
        Design review with Lerato and Pieter on Thursday, 14:00–14:45. A calendar invite goes to both, with the agenda attached.
      </p>
    </form>
    <div slot="actions">
      <TextButton form="dlg-schedule-form" value="cancel">Cancel</TextButton>
      <FilledTonalButton form="dlg-schedule-form" value="send">Send invite</FilledTonalButton>
    </div>
  </Dialog>
);

export const ConfirmDelete = () => (
  <Dialog open quick type="alert">
    <Icon slot="icon">delete</Icon>
    <div slot="headline">Delete this draft?</div>
    <form slot="content" id="dlg-delete-form" method="dialog">
      Your notes for “Quarterly plan” will be removed. This can’t be undone.
    </form>
    <div slot="actions">
      <TextButton form="dlg-delete-form" value="cancel">Keep</TextButton>
      <TextButton form="dlg-delete-form" value="delete">Delete</TextButton>
    </div>
  </Dialog>
);
