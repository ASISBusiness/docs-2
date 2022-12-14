---
title: "How to get the native balance of a multi-signature wallet"
slug: "../how-to-get-the-native-balance-of-a-smart-contract-wallet"
description: "Learn how to get the native balance of a multi-signature wallet using the Moralis Balance API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](/docs/quickstart) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install [Moralis SDK](/docs/moralis-sdk) in your project.

```shell npm
npm install moralis @moralisweb3/common-evm-util
```
```shell yarn
yarn add moralis @moralisweb3/common-evm-util
```
```shell pnpm
pnpm add moralis @moralisweb3/common-evm-util
```
```Text pip
pip install moralis
```



## Step 2: Get the native balance of an address

In order to get the native balance of a multi-signature wallet, Moralis provides you the `[getNativeBalance](https://docs.moralis.io/reference/getnativebalance)` API endpoint.

Here you'll need two parameters: `address` and `chain`.

Once you have obtained both the `address` and `chain`, you can copy the following code:

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-util");

const runApp = () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = '0x849D52316331967b6fF1198e5E32A0eB168D039d';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  console.log(response.toJSON());
}

runApp();
```
```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-util";

const runApp = () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = '0x849D52316331967b6fF1198e5E32A0eB168D039d';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0x849D52316331967b6fF1198e5E32A0eB168D039d", 
    "chain": "eth", 
}

result = evm_api.balance.get_native_balance(
    api_key=api_key,
    params=params,
)

print(result)
```



To execute the program, run the following command:

```Text Shell (JavaScript)
node index.js
```
```Text Shell (TypeScript)
node index.ts
```
```Text Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
[
  {
  "balance": "970315108126866256970"
	}
]
```



Congratulations 🥳 You just got the native balance of a multi-signature wallet address with just a few lines of code using the Moralis Balance API!

## Youtube Video

`oembed: https://www.youtube.com/watch?v=sL5t07JE0aE

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNativeBalance](https://docs.moralis.io/reference/getnativebalance)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.