// Screenshots a page in headless Chrome so a section can be checked by eye.
//   node tools/shot.mjs showcase/preview-03-x.html out.png [width] [height]
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const [page, out, w = '1280', h = '2400'] = process.argv.slice(2);
const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
execFileSync(chrome, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
  `--window-size=${w},${h}`, '--virtual-time-budget=4000',
  `--screenshot=${resolve(out)}`, `file://${resolve(page)}`,
], { stdio: 'ignore' });
console.log(out);
