import React from 'react'

import ReactMarkdownPreview from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { Article } from './styles'

interface IMarkdownPreviewProps {
  content: string
}

const MarkdownPreview: React.FC<IMarkdownPreviewProps> = ({ content }) => (
  <Article>
    <ReactMarkdownPreview
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdownPreview>
  </Article>
)

export default MarkdownPreview
