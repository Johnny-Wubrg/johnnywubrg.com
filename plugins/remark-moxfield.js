import { visit } from 'unist-util-visit';

export default function remarkCardLink() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const regex = /\[mox:([a-zA-Z\d\-_]+)\]/g;
      const matches = [...node.value.matchAll(regex)];

      if (matches.length === 0) return;

      const children = [];
      let lastIndex = 0;

      for (const match of matches) {
        const [fullMatch, decklistId] = match;
        const start = match.index;
        const end = start + fullMatch.length;

        if (lastIndex < start) {
          children.push({ type: 'text', value: node.value.slice(lastIndex, start) });
        }

        children.push({
          type: 'mdxJsxTextElement',
          name: 'MoxfieldDecklist',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'id',
              value: decklistId,
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