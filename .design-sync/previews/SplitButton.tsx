import * as React from 'react';
import { SplitButton, Icon } from '@mindmatter/material-web-react';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

export const Colors = () => (
  <div style={row}>
    <SplitButton color="filled"><button slot="leading">Send</button><button slot="trailing" aria-label="Send options"></button></SplitButton>
    <SplitButton color="elevated"><button slot="leading">Copy</button><button slot="trailing" aria-label="Copy options"></button></SplitButton>
    <SplitButton color="tonal"><button slot="leading">Save</button><button slot="trailing" aria-label="Save options"></button></SplitButton>
    <SplitButton color="outlined"><button slot="leading">Print</button><button slot="trailing" aria-label="Print options"></button></SplitButton>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <SplitButton color="filled" size="xs"><button slot="leading">Send</button><button slot="trailing" aria-label="Send options"></button></SplitButton>
    <SplitButton color="filled" size="sm"><button slot="leading">Send</button><button slot="trailing" aria-label="Send options"></button></SplitButton>
    <SplitButton color="filled" size="md"><button slot="leading">Send</button><button slot="trailing" aria-label="Send options"></button></SplitButton>
    <SplitButton color="filled" size="lg"><button slot="leading">Send</button><button slot="trailing" aria-label="Send options"></button></SplitButton>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <SplitButton color="filled" size="md">
      <button slot="leading"><Icon>send</Icon>Send</button>
      <button slot="trailing" aria-label="More send options"></button>
    </SplitButton>
    <SplitButton color="tonal" size="md">
      <button slot="leading"><Icon>download</Icon>Download</button>
      <button slot="trailing" aria-label="Download options"></button>
    </SplitButton>
  </div>
);

export const Selected = () => (
  <div style={row}>
    <SplitButton color="tonal" size="md">
      <button slot="leading">Save draft</button>
      <button slot="trailing" aria-label="Save options"></button>
    </SplitButton>
    <SplitButton color="tonal" size="md" selected>
      <button slot="leading">Save draft</button>
      <button slot="trailing" aria-label="Save options"></button>
    </SplitButton>
  </div>
);
