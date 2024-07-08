import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, b as createError } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'xrpl';
import 'xumm';
import 'mongodb';
import 'node:fs';
import 'node:url';

const index_post = defineEventHandler(async (event) => {
  console.log("checkSecret");
  const runtimeConfig = useRuntimeConfig(event);
  const body = await readBody(event);
  const secret = body.secret;
  if (!secret) {
    throw new createError(
      { statusCode: 401, statusMessage: "Please provide the secret" }
    );
  }
  return secret === runtimeConfig.mag_secret_1 || secret === runtimeConfig.mag_secret_2;
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
