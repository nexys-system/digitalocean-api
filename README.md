# Digitalocean API

[![npm version](https://badge.fury.io/js/@nexys/digitalocean-api.svg)](https://www.npmjs.com/package/@nexys/digitalocean-api)
[![npm version](https://img.shields.io/npm/v/@nexys/digitalocean-api.svg)](https://www.npmjs.com/package/@nexys/digitalocean-api)
[![Build and Test Package](https://github.com/nexys-system/digitalocean-api/actions/workflows/yarn.yml/badge.svg)](https://github.com/nexys-system/digitalocean-api/actions/workflows/yarn.yml)
[![Build and Test Package and (publish)](https://github.com/nexys-system/digitalocean-api/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-system/digitalocean-api/actions/workflows/publish.yml)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@nexys/digitalocean-api)](https://bundlephobia.com/result?p=@nexys/digitalocean-api)

## Get started

### Install

`yarn`

### Build

`yarn build`

### Test

`yarn test`

### CI

Continuous integration is included and works with github actions.

### Adjust Configuration

Make sure you change the path of the badge (both links and images to link to your package/repo). In `package.json` make sure you point to your github repo

## Publish

In order to publish your package, add the secret variable `NPM_AUTH_TOKEN` to the list of secret variables and release a new version

### Release a new version

```
npm version {patch,minor,major}
git push origin master --tags
```

## Resources

aoos and api
https://cloud.digitalocean.com/account/api/access?i=3feded

oauth digitalocean do
https://developers.digitalocean.com/documentation/oauth/

api doc
https://developers.digitalocean.com/documentation/v2/#databases
