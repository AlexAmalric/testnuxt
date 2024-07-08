import { d as defineEventHandler, r as readBody, a as getXumm, G as GetObjects, c as createOffer, U as UpdateOffer } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const createNFTOffer = async ({ xrplAddress, network }) => {
  try {
    let xumm = getXumm();
    const nft = await GetObjects({ xrplAddress, network });
    console.log(xrplAddress, nft);
    if (nft && nft.length > 0) {
      let nftObject = nft[0];
      const offerId = await createOffer({ destination: xrplAddress, network, nftId: nftObject.nftId });
      nftObject.nftOfferId = offerId;
      console.log("createNFTOffer completed with ", offerId, { xrplAddress, network });
      return await UpdateOffer(nftObject.nftId, nftObject);
    } else {
      throw new Error("NFT not found");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("createNFTOffer", body);
  return createNFTOffer({
    xrplAddress: body.xrplAddress,
    network: body.network
  });
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
