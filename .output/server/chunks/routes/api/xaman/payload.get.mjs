import { d as defineEventHandler, f as getQuery, b as createError, a as getXumm } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const payload_get = defineEventHandler(async (event) => {
  var _a;
  try {
    const { uuid } = getQuery(event);
    if (!uuid) {
      throw createError({
        status: 400,
        statusMessage: "please provide UUID"
      });
    }
    let xumm = getXumm();
    const payload = await ((_a = xumm.payload) == null ? void 0 : _a.get(uuid));
    console.log(payload);
    return payload;
  } catch (error) {
    console.error(error);
    throw createError({
      status: 500,
      statusMessage: error.toString()
    });
  }
});

export { payload_get as default };
//# sourceMappingURL=payload.get.mjs.map
