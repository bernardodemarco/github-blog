import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import { Post } from './styles'

const mockMarkdown = `
Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have.
These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\nProgramming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n### Dynamic typing\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not
directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n
~~~ javascript\r\nlet foo = 42;    // foo is now a number\r\nfoo = 'bar';     // foo is now a string\r\nfoo = true;      // foo is now a boolean\r\n~~~
## Lists
- [ ] todo
- [x] ~done~
https://www.google.com
`

export function PostContent() {
  return (
    <Post
      remarkPlugins={[remarkGfm]}
      linkTarget={'_blank'}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={nightOwl}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
      }}
    >
      {mockMarkdown}
    </Post>
  )
}
