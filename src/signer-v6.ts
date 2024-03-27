import dotenv from "dotenv";
import { ethers6 } from "ethers6-proxied";

dotenv.config();
const { NODE_URL, MNEMONIC, PK } = process.env;

if (!PK && !MNEMONIC) {
    throw new Error("Please set either MNEMONIC or PK in .env");
}

export const providerv6 = new ethers6.JsonRpcProvider(NODE_URL);
export const signerv6 = Boolean(PK)
  ? new ethers6.Wallet(PK!, providerv6)
  : ethers6.Wallet.fromPhrase(MNEMONIC!, providerv6);

