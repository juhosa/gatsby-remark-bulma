const visit = require("unist-util-visit-parents")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, pluginOptions) => {
  // Manipulate AST
  visit(markdownAST, "heading", (node, ancestors) => {
    // console.log(node)
    let { depth } = node
    // console.log({ depth }, "syvyys")
    node.data = {
      hProperties: { class: `title is-${depth}` },
    }
  })

  visit(markdownAST, "blockquote", (node, ancestors) => {
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

  visit(markdownAST, "paragraph", (node, ancestors) => {
    if (ancestors[ancestors.length - 1].type === "root") {
      node.data = {
        hProperties: { class: "content" },
      }
    }
  })

  return markdownAST
}
