import { ethers } from 'ethers'
import { PrismaClient } from "@prisma/client"
import { mnemonic, error_repport as verbose} from './mnemoRandomizer.js'
import * as dotenv from 'dotenv'
dotenv.config()

const prisma = new PrismaClient()

while ( 1 == 1) {
    try{
        let hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic())
        if( hdNode.address ){
            const addRow = await prisma.wallet.create({
                data: {
                    seedphrase: hdNode.mnemonic.phrase,
                    address: hdNode.address,
                    derivation: hdNode.path,
                }
            })
            console.log(`\x1b[32m[✅ Valid-key for:(\x1b[36m${hdNode.address}\x1b[32m)] ->  \x1b[42m ${hdNode.mnemonic.phrase} \x1b[40m`)
        }

    } catch( incident ) { (verbose == 'true') ? console.log('\x1b[31mWrong mnemo', incident.code) : '' }
}