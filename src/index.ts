import { invokeAPI, encrypt, Board, renderGame, getBucketName, getUsersSQL } from "./modules";

export const run = async () => {
  // Api Example Module
  await invokeAPI();

  // Encryption Module
  console.log(encrypt("hello", "aes-256-cbc"));

  // table
  const board: Board = [
    ["x", "o", "x"],
    ["x", "o", ""],
    ["o", "x", ""],
  ];
  console.log(renderGame(board));

  // Env
  console.log(`S3_BUCKET = ${getBucketName()}`);

  // SQL
  console.log(await getUsersSQL());
};
