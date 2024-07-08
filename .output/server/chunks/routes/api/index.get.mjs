import { d as defineEventHandler, f as getQuery, b as createError, G as GetObjects } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const listArt = async ({ xrplAddress, network }) => {
  console.log("listArt", network);
  let arts = await GetObjects({ xrplAddress, network });
  return arts;
};
const index_get = defineEventHandler(async (event) => {
  try {
    const { xrplAddress, network } = getQuery(event);
    return listArt({ xrplAddress, network });
  } catch (e) {
    throw createError({
      status: 500,
      statusMessage: "Unable to fetch art"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
