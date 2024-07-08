import { d as defineEventHandler, r as readBody, b as createError, e as checkImageExists } from '../../../../runtime.mjs';
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';
import sharp from 'sharp';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const s3Client = new S3({
  forcePathStyle: false,
  // Configures to use subdomain/virtual calling format.
  endpoint: "https://fra1.digitaloceanspaces.com",
  region: "fra1",
  credentials: {
    accessKeyId: "DO00Z3L4PBAHK3FTY6ND",
    secretAccessKey: "wUQCkr11VhGpeNer0sFgbNys3uk2gOzwOMSXhRDF/Qs"
  }
});
const saveFile = async ({ fileName, fileContent, metadata = {} }) => {
  const bucketParams = {
    Bucket: "albers",
    Key: fileName,
    Body: fileContent,
    ACL: "public-read",
    Metadata: metadata
  };
  console.log(bucketParams);
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(
      "Successfully uploaded object: https://albers.fra1.cdn.digitaloceanspaces.com/" + bucketParams.Key
    );
    const url = "https://albers.fra1.cdn.digitaloceanspaces.com/" + bucketParams.Key;
    console.log(data);
    return url;
  } catch (err) {
    console.log("Error", err);
  }
};

const index_post = defineEventHandler(async (event) => {
  console.log("image created");
  const { imageData, xrplAddress } = await readBody(event);
  if (!imageData) {
    throw createError({
      status: 400,
      statusMessage: "Image not provided"
    });
  }
  if (!xrplAddress) {
    throw createError({
      status: 400,
      statusMessage: "XRPL address not provided"
    });
  }
  console.log({ imageData, xrplAddress });
  const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
  const fileContent = Buffer.from(base64Data, "base64");
  const mainFile = await sharp(fileContent).webp({ quality: 90 }).toBuffer();
  const url = await saveFile({
    fileName: `alberx-${xrplAddress}.webp`,
    fileContent: mainFile
  });
  const thumbnailFile = await sharp(fileContent).webp({ quality: 80 }).resize({
    width: 600,
    height: 800,
    fit: "inside",
    background: { r: 255, g: 255, b: 255, alpha: 0 }
  }).toBuffer();
  const thumbnail = await saveFile({
    fileName: `alberx-${xrplAddress}-thumbnail.webp`,
    fileContent: thumbnailFile
  });
  console.log(url, thumbnail, await checkImageExists({ xrplAddress }));
  return JSON.stringify({ url });
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
