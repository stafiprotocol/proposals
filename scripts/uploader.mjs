#!/usr/bin/env node
/* eslint-disable */
import * as dotenv from "dotenv"
import bs58 from "bs58"
import { execSync } from "child_process"
import { exit } from "process"
import rawJsonAips from "../cid/ipfs-sips/all-sips.json" assert { type: "json" };
import fs from "fs"
import fetch from "node-fetch"
import Hash from "ipfs-only-hash"

dotenv.config()

const { PINATA_KEY, PINATA_SECRET } = process.env

const pinataEndpoint = "https://api.pinata.cloud/pinning/pinJSONToIPFS"

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// https://ethereum.stackexchange.com/questions/44506/ipfs-hash-algorithm
async function getHash(data) {
  return Hash.of(data)
}

async function main() {
  for (const [name, sip] of Object.entries(rawJsonAips)) {
    sip.description = sip.content
    // @ts-ignore
    delete sip.content

    // @ts-ignore
    const filename = `./cid/ipfs-sips/${sip.basename}-Ipfs-hashes.json`

    const fileExists = fs.existsSync(filename)
    if (fileExists) {
      const hash = await getHash(JSON.stringify(sip))
      const data = JSON.parse(fs.readFileSync(filename, "utf8"))
      if (data.hash === hash) {
        console.log(
          // @ts-ignore
          `skipping as uploaded with same hash already: ${sip.basename}`
        )
        continue
      }
    }

    try {
      const res = await fetch(pinataEndpoint, {
        method: "POST",
        body: JSON.stringify({
          pinataOptions: { cidVersion: 0 },
          pinataContent: sip,
        }),
        headers: {
          "Content-Type": "application/json",
          // @ts-ignore
          pinata_api_key: PINATA_KEY,
          // @ts-ignore
          pinata_secret_api_key: PINATA_SECRET,
        },
      })

      if (!res.ok) {
        throw Error(await res.text())
      }

      const result = await res.json()
      // @ts-ignore

      if (result.error) throw { message: result.error }
      // @ts-ignore

      const hash = result.IpfsHash
      const encodedHash = `0x${Buffer.from(bs58.decode(hash))
        .slice(2)
        .toString("hex")}`
      // @ts-ignore
      console.log(`${sip.title}: ✅ Success!`)
      console.log(` IPFS hash: ${hash}`)
      console.log(` Encoded IPFS hash (for proposal creation): ${encodedHash}`)
      console.log(
        ` See the file here: https://gateway.pinata.cloud/ipfs/${hash}`
      )
      fs.writeFileSync(
        filename,
        // @ts-ignore
        JSON.stringify({ name: sip.basename, hash, encodedHash }, null, 2)
      )
      await delay(250)
      execSync(
        `curl -s https://gateway.pinata.cloud/ipfs/${hash} > tmp && curl -sF file='@./tmp' https://api.thegraph.com/ipfs/api/v0/add`
      )
      await delay(250)
    } catch (error) {
      console.error(`Error during main loop: ${error}`)
      throw error
    }
  }
  const dataArray = [];

  for (const [name, sip] of Object.entries(rawJsonAips)) {
    sip.description = sip.content
    // @ts-ignore
    delete sip.content

    // @ts-ignore
    const filename = `./cid/ipfs-sips/${sip.basename}-Ipfs-hashes.json`
    const data = JSON.parse(fs.readFileSync(filename, "utf8"))

    const dataWrite = {
      name: data.name,
      hash: data.hash
    };

    dataArray.push(dataWrite);
    
  }

  await delay(250)

  console.log(dataArray);
  const jsonData = JSON.stringify(dataArray, null, 2);
  console.log(jsonData);
  fs.writeFileSync('./cid/ipfs-sips/all-hash.json', jsonData);
  await delay(250)

}

;(async () => {
  try {
    await main()
  } catch (e) {
    console.error(`Exiting [sip-uploader] process due next error: \n ${e}`)
    exit(1)
  }
})()