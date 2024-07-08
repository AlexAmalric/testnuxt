import { d as defineEventHandler, a as getXumm, b as createError } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const signIn_get = defineEventHandler(async (event) => {
  var _a;
  try {
    let xumm = getXumm();
    const pong = await (xumm == null ? void 0 : xumm.ping());
    const payload = await ((_a = xumm.payload) == null ? void 0 : _a.create({
      custom_meta: {
        instruction: "Sign request from " + (pong == null ? void 0 : pong.application.name)
      },
      txjson: {
        TransactionType: "SignIn"
      },
      options: {
        return_url: {
          "app": "https://mag.xrpl.quest/albers/mint?uuid={id}"
        }
      }
    }));
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

export { signIn_get as default };
//# sourceMappingURL=sign-in.get.mjs.map
