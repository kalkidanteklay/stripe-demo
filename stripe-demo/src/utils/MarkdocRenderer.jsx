import React from 'react';
import Markdoc from '@markdoc/markdoc';

export function MarkdocRenderer({ content }) {
  const ast = Markdoc.parse(content);
  const contentNode = Markdoc.transform(ast, {
    nodes: {
      heading: {
        render: 'Heading',
        attributes: {
          level: { type: Number }
        }
      },
      link: {
        render: 'Link',
        attributes: {
          href: { type: String },
          title: { type: String }
        }
      }
    }
  });

  const components = {
    Heading: ({ level, children }) => {
      const Tag = `h${level}`;
      return <Tag>{children}</Tag>;
    },
    Link: ({ href, children }) => {
      return <a href={href}>{children}</a>;
    }
  };

  return (
    <div className="markdoc-content">
      {Markdoc.renderers.react(contentNode, React, { components })}
    </div>
  );
}
