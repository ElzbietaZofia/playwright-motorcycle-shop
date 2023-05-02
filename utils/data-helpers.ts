import * as crypto from "crypto"

export async function getRandomString() {
  return crypto.randomBytes(8).toString("hex")
}