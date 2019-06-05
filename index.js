const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

module.exports = ({ markdownAST }, pluginOptions) => {
  // Manipulate AST
  visit(markdownAST, "heading", node => {
    // console.log(node)
    let { depth } = node
    console.log({depth})

    let text = toString(node)

    const html = `
        <h${depth} class="title is-${depth}">
          ${text}
        </h${depth}>
      `

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
