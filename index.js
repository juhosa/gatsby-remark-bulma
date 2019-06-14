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
    const div = {
      type: "section",
      data: {
        hName: "div",
        hProperties: { class: "content" },
      },
      children: [node],
    }
    const parent = ancestors[ancestors.length - 1]
    const startIndex = parent.children.indexOf(node)
    parent.children.splice(startIndex, 1, div)
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
