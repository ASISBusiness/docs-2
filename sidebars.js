/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  web3apiEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api/evm",
    },
  ],
  web3apiAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api/aptos",
    },
  ],
  web3apiSolanaSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api/solana",
    },
  ],
  streamsEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api/evm",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "reference/streams-api",
    },
  ],
  streamsAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api/aptos",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "reference/streams-api",
    },
  ],
  authenticationEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/evm",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "Overview",
      id: "reference/authentication-api/overview",
    },
    {
      type: "autogenerated",
      dirName: "reference/authentication-api/evm-api",
    },
  ],
  authenticationAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/aptos",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "Overview",
      id: "reference/authentication-api/overview",
    },
    {
      type: "autogenerated",
      dirName: "reference/authentication-api/aptos-api",
    },
  ],
  authenticationSolanaSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/solana",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "Overview",
      id: "reference/authentication-api/overview",
    },
    {
      type: "autogenerated",
      dirName: "reference/authentication-api/solana-api",
    },
  ],
  exampledappsSidebar: [
    {
      type: "autogenerated",
      dirName: "04-example-dapps",
    },
  ],
};

module.exports = sidebars;
