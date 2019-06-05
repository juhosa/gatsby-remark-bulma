const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, pluginOptions) => {
  // Manipulate AST
  visit(markdownAST, "heading", node => {
    // console.log(node)
    let { depth } = node
    // console.log({ depth }, "syvyys")

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

  visit(markdownAST, "blockquote", node => {
    // console.log(node)
    let text = toString(node)
    // console.log({ text })

    // '<div class="content"><blockquote>$1</blockquote></div>',
    const html = `
        <div class="content">
          <blockquote>
            ${text}
          </blockquote>
        </div>
      `

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
