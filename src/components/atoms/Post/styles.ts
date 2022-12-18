import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme.accent.color};

  padding: 2rem;
  border-radius: 1rem;

  p {
    font-size: 0.8rem;
  }

  h5 {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  span {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;

    background-color: ${({ theme }) => theme.text.opacify(0.1)};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 1rem;
  }
`;
