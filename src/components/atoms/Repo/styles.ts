import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme.accent.color};

  padding: 2rem;
  border-radius: 1rem;

  transition: all ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  p {
    font-size: 1rem;
  }

  a {
    font-weight: 400;
    font-size: 1.5rem;

    text-decoration: underline;
  }
`;

export const Details = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.8rem;
  }

  .stars {
    display: inherit;
    align-items: inherit;
    gap: 0.2rem;

    svg {
      width: 1rem;
    }
  }
`;
