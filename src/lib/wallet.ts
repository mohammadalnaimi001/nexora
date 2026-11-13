import {PKPass} from "passkit-generator";
import fs from "node:fs";
import path from "node:path";
import type {Membership,User} from "@prisma/client";
import {tierMeta} from "@/lib/tiers";
export async function generatePass(m:Membership&{user:User}):Promise<Buffer>{
 const keys=["APPLE_PASS_TYPE_ID","APPLE_TEAM_ID","APPLE_WWDR_CERT_PATH","APPLE_SIGNER_CERT_PATH","APPLE_SIGNER_KEY_PATH"];
 for(const k of keys)if(!process.env[k])throw new Error("Missing "+k);
 const dir=path.resolve(process.env.APPLE_PASS_ASSETS_DIR??"./wallet-assets");
 const certs={wwdr:fs.readFileSync(path.resolve(process.env.APPLE_WWDR_CERT_PATH!)),signerCert:fs.readFileSync(path.resolve(process.env.APPLE_SIGNER_CERT_PATH!)),signerKey:fs.readFileSync(path.resolve(process.env.APPLE_SIGNER_KEY_PATH!)),...(process.env.APPLE_SIGNER_KEY_PASSPHRASE?{signerKeyPassphrase:process.env.APPLE_SIGNER_KEY_PASSPHRASE}:{})};
 const p=await PKPass.from({model:dir,certificates:certs},{serialNumber:m.walletSerial,description:"NEXORA PRIVILEGE",organizationName:process.env.APPLE_ORGANIZATION??"Nexora Agency",passTypeIdentifier:process.env.APPLE_PASS_TYPE_ID!,teamIdentifier:process.env.APPLE_TEAM_ID!});
 p.type="storeCard";p.primaryFields.push({key:"member",label:"MEMBER",value:m.user.name});p.secondaryFields.push({key:"tier",label:"TIER",value:tierMeta[m.tier].label});p.auxiliaryFields.push({key:"points",label:"POINTS",value:String(m.pointsBalance)},{key:"number",label:"MEMBER NO.",value:m.memberNumber});p.setBarcodes({message:m.qrToken,format:"PKBarcodeFormatQR",messageEncoding:"iso-8859-1"});return p.getAsBuffer();
}