import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme.accent.color};

  padding: 2rem;
  border-radius: 1rem;

  cursor: pointer;

  transition: all ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  p {
    font-size: 0.8rem;
  }

  h5 {
    font-weight: 400;
    font-size: 1.5rem;
  }
`

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`
