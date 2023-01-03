import styled from 'styled-components'

export const Error = styled.div`
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.text.color};

  svg {
    width: 3rem;
    height: 3rem;
  }
`
