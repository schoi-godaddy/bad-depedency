import * as crypto from "crypto";

interface EncryptedString {
  iv: string;
  encrypted: string;
}

export function encrypt(text: string, algorithm: string): EncryptedString {
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return { iv: iv.toString("hex"), encrypted: encrypted.toString("hex") };
}
