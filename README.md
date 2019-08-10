# gatsby-remark-bulma

Inserts styles / additional elements to make [Bulma](https://bulma.io) styles work in elements created from Markdown.

## Installation

```
yarn add gatsby-remark-bulma
```
or 
```
npm install --save gatsby-remark-bulma
```

## How to use
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-bulma`],
    },
  },
]
```

## Elements covered

* Headings get `class="title is-${depth}`
* Paragraphs get `class="content"`
* Lists get wrapped in `<div class="content>...</div>`
* Blockquotes get wrapped in `<div class="content>...</div>`

## Contribution

Missing some style/element? Found a bug?

File an issue or better yet, submit a PR!

## License
MIT
