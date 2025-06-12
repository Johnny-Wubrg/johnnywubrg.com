import { visit } from 'unist-util-visit';

export default function remarkCardLink() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const regex = /\[\[([^\]]+)\]\]/g;
      const matches = [...node.value.matchAll(regex)];

      if (matches.length === 0) return;

      const children = [];
      let lastIndex = 0;

      for (const match of matches) {
        const [fullMatch, cardName] = match;
        const start = match.index;
        const end = start + fullMatch.length;

        if (lastIndex < start) {
          children.push({ type: 'text', value: node.value.slice(lastIndex, start) });
        }

        children.push({
          type: 'mdxJsxTextElement',
          name: 'CardLink',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'name',
              value: cardName,
            },
          ],
          children: [],
        });

        lastIndex = end;
      }

      if (lastIndex < node.value.length) {
        children.push({ type: 'text', value: node.value.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...children);
    });
  };
}