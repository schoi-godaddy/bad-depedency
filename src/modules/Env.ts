import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export const getBucketName = (): string | undefined => {
  return process.env.S3_BUCKET;
};
