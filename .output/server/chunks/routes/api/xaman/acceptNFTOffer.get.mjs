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

const acceptNFTOffer_get = defineEventHandler(async (event) => {
  var _a;
  const { userToken, offerId } = getQuery(event);
  if (!userToken) {
    throw createError({
      status: 400,
      statusMessage: "missing user token"
    });
  }
  if (!offerId) {
    throw createError({
      status: 400,
      statusMessage: "missing offer id"
    });
  }
  try {
    let xumm = getXumm();
    const pong = await (xumm == null ? void 0 : xumm.ping());
    const payload = await ((_a = xumm.payload) == null ? void 0 : _a.create({
      user_token: userToken,
      // Doc: https://docs.xumm.dev/concepts/payloads-sign-requests/delivery/push
      txjson: {
        TransactionType: "NFTokenAcceptOffer",
        NFTokenSellOffer: offerId
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

export { acceptNFTOffer_get as default };
//# sourceMappingURL=acceptNFTOffer.get.mjs.map
