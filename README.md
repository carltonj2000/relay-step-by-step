# Relay Step By Step Guide

The code in this repository is based on the
[Step-by-step Guide](https://relay.dev/docs/getting-started/step-by-step-guide/).

Use
[get-graphql-schema](https://www.npmjs.com/package/get-graphql-schema)
if using your own endpoint.

```bash
npx create-react-app relay-step-by-step
yarn add relay-runtime react-relay
yarn add --dev relay-compiler graphql babel-plugin-relay
curl https://raw.githubusercontent.com/relayjs/relay-examples/master/issue-tracker/schema/schema.graphql > schema.graphql
```
