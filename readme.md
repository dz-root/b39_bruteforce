## EVM - Guessing BIP39 seed phrase

1- Install dependencies (ether.js, prisma)
2- Init database. *([read more]('https://www.prisma.io/docs') about prisma orm)*
3- Run it! ✨
 ```sh
 npm i
 ```
 ```sh
npx prisma db push
 ```
```sh
npm start
```
![alt text](https://i.ibb.co/Sw6yh4K/b39.png)

### Custom database

```js
/*
* Default config
* File path: ./prisma/schema.prisma
*/

datasource db {
  provider = "sqlite"
  url      = "file:./db.sqlite"
}

model Wallet {
  id  Int   @id @default(autoincrement())
  seedphrase  String
  address     String
  derivation  String
}
```
view [Data Model doc]('https://www.prisma.io/docs/concepts/components/prisma-schema/data-model')

![alt text](https://i.ibb.co/FYdVdcY/Sans-titre.png)


#### Ressources
[BIP39 Wordlists]('https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md')
[Derivation Paths Explained]('https://support.bifrostwallet.com/en/articles/5588263-derivation-paths-explained')