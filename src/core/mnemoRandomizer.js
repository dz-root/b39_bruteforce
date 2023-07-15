import bip39wordList from '../BIP39/en.js'
import * as dotenv from 'dotenv'
dotenv.config()

const random_limit  = process.env.RANDOM_LIMIT 

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function mnemonic(){
    return bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]+' '+bip39wordList[getRandomInt(random_limit)]
} 

export const error_repport = process.env.ERROR_REPPORTING