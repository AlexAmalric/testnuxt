import { d as defineEventHandler, g as getRequestURL } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const _____ = defineEventHandler((event) => {
  const routePath = getRequestURL(event);
  console.log(` 404 == No match for ${routePath} ==`);
  return `The route you were trying to access does not exist: ${routePath}`;
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
