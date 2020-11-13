const visit = require("unist-util-visit-parents");

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "heading", (node, ancestors) => {
    let { depth } = node;
    node.data = {
      hProperties: { class: `title is-${depth}` },
    };
  });

  visit(markdownAST, "blockquote", (node, ancestors) => {
    const div = {
      type: "section",
      data: {
        hName: "div",
        hProperties: { class: "content" },
      },
      children: [node],
    };
    const parent = ancestors[ancestors.length - 1];
    const startIndex = parent.children.indexOf(node);
    parent.children.splice(startIndex, 1, div);
  });

  visit(markdownAST, "list", (node, ancestors) => {
    const div = {
      type: "section",
      data: {
        hName: "div",
        hProperties: { class: "content" },
      },
      children: [node],
    };
    const parent = ancestors[ancestors.length - 1];
    const startIndex = parent.children.indexOf(node);
    parent.children.splice(startIndex, 1, div);
  });

  visit(markdownAST, "paragraph", (node, ancestors) => {
    if (ancestors[ancestors.length - 1].type === "root") {
      node.data = {
        hProperties: { class: "content" },
      };
    }
  });

  visit(markdownAST, "table", (node, ancestors) => {
    node.data = {
      hProperties: { class: `table` },
    };
  });

  return markdownAST;
};
