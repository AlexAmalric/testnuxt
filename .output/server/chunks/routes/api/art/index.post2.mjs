import { d as defineEventHandler, r as readBody, G as GetObjects, h as UpdateOwner } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const redeemNFT = async ({ xrplAddress, network }) => {
  try {
    console.log({ xrplAddress, network });
    const nft = await GetObjects({ xrplAddress, network });
    if (nft && nft.length > 0) {
      let nftObject = nft[0];
      nftObject.owner = xrplAddress;
      await UpdateOwner(nftObject.nftId, nftObject);
      return "{}";
    } else {
      throw new Error("NFT not found");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
const index_post = defineEventHandler(async (event) => {
  const { xrplAddress, network } = await readBody(event);
  console.log("redeemingNFT");
  return redeemNFT({ xrplAddress, network });
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
