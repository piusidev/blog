import styled from 'styled-components'

export const Article = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  table,
  pre,
  ul,
  ol {
    margin-bottom: 1rem;
  }

  ul,
  ol {
    padding-left: 2rem;
  }

  li {
    padding-bottom: 0.5rem;
  }

  p {
    line-height: 1.6rem;
  }

  h1 {
    font-size: 2rem;

    padding-bottom: 1rem;
    margin-bottom: 2rem;

    border-bottom: 1px solid ${({ theme }) => theme.text.opacify(0.2)};
  }

  code {
    background: rgba(110, 118, 129, 0.4);
    color: ${({ theme }) => theme.text.color};

    padding: 0.1rem;

    border-radius: 0.3rem;
  }

  .hljs {
    display: block;
    overflow-x: auto;

    padding: 1rem;
    border-radius: 0.5rem;

    background: #2a2e37;

    box-shadow: none;
  }

  .hljs-built_in,
  .hljs-selector-tag,
  .hljs-section,
  .hljs-link {
    color: #8be9fd;
  }

  .hljs-params {
    color: #ffb86c;
  }

  .hljs-keyword {
    color: #ff79c6;
  }

  .hljs,
  .hljs-subst {
    color: #f8f8f2;
  }

  .hljs-title,
  .hljs-attr,
  .hljs-meta-keyword {
    font-style: italic;
    color: #50fa7b;
  }

  .hljs-title {
    font-style: normal;
  }

  .hljs-string,
  .hljs-meta,
  .hljs-name,
  .hljs-type,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #f1fa8c;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-deletion {
    color: #6272a4;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-title,
  .hljs-section,
  .hljs-doctag,
  .hljs-type,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-literal,
  .hljs-number {
    color: #bd93f9;
  }

  .hljs-emphasis {
    font-style: italic;
  }
`
