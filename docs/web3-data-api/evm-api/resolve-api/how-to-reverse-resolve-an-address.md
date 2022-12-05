---
title: "How to resolve an Unstoppable domain"
slug: "how-to-reverse-resolve-an-address"
excerpt: "Learn how to resolve an Unstoppable domain to a wallet address using Moralis Resolve API."
hidden: false
createdAt: "2022-11-04T14:20:08.872Z"
updatedAt: "2022-12-03T04:56:44.028Z"
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](https://docs.moralis.io/docs/quickstart) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install [Moralis SDK](https://docs.moralis.io/docs/moralis-sdk) in your project.

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



## Step 2: Resolve Unstoppable Domain

In order to resolve an Unstoppable domain to an ETH address, Moralis provides you a `[resolveDomain](https://docs.moralis.io/reference/resolvedomain)` endpoint to do so.

Here you'll need one parameter: `address`.

Once you've obtained the `address`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const domain = 'brad.crypto';

  const response = await Moralis.EvmApi.resolve.resolveDomain({
    domain,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-util";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const domain = 'brad.crypto';

  const response = await Moralis.EvmApi.resolve.resolveDomain({
    domain,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "domain": "brad.crypto", 
    "currency": "eth", 
}

result = evm_api.resolve.resolve_domain(
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
{
  "address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
}
```



Congratulations 🥳 You just resolved an Unstoppable domain to a wallet address with just a few lines of code using the Moralis Resolve API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [resolveDomain](https://docs.moralis.io/reference/resolvedomain)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.