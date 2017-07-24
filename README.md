# code-splitting-router-issue

> A Vue.js router and dynamic import bug example 

## Issue
Using router.replace to load a page will not work if that page is dynamically imported.

Swap lines 9 and 10 in main.js to see it work/break.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
