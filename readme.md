## EVM - Guessing BIP39 seed phrase
  - Install dependencies (ether.js, prisma)
  - Init database. *([read more]('https://www.prisma.io/docs') about prisma orm)*
  - Run it! ✨
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
Data Model doc: https://www.prisma.io/docs/concepts/components/prisma-schema/data-model

![alt text](https://i.ibb.co/FYdVdcY/default-db.png)


#### Ressources
  - https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md
  - https://support.bifrostwallet.com/en/articles/5588263-derivation-paths-explained
