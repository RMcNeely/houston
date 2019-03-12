# Houston Architecture

- [Overview](#overview)
- [CLI](#cli)
- [Client](#client)
- [Lib](#lib)
- [Repo](#repo)
- [Worker](#worker)

## Overview
Houston is a multipart system that serves as a developer portal for the elementary app store. In addition to providing a developer portal it builds, tests, and publishes apps and has the ability to file some simple issues to a repo. While all of these parts of Houston are located in the `src` folder, different parts make up different subfolders.


```shell
├── cli
├── client
├── lib
├── repo
└── worker
```

## CLI

## Client

```
├── components
│   └── the-navbar.vue
├── fonts
│   └── open-sans
│       ├── bold-italic.ttf
│       ├── bold.ttf
│       ├── extra-bold-italic.ttf
│       ├── extra-bold.ttf
│       ├── italic.ttf
│       ├── LICENSE.txt
│       ├── light-italic.ttf
│       ├── light.ttf
│       ├── regular.ttf
│       ├── semi-bold-italic.ttf
│       └── semi-bold.ttf
├── images
│   └── brand
│       └── elementary-logomark.svg
├── layouts
│   ├── blank.vue
│   └── default.vue
├── pages
│   ├── error.vue
│   └── index.vue
└── README.md
```

This folder contains the code that makes up the developer portal that lives at https://developer.elementary.io/dashboard. It is build with [Vue.js](https://vuejs.org/) and [Nuxt.js](https://nuxtjs.org/) and is under active development. **Seems right now to be missing dependencies to run correctly**

## Lib

## Repo

## Worker
