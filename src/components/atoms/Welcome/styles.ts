import styled from 'styled-components';

export const Message = styled.div`
  h1 {
    font-weight: 500;
    font-size: 1.5rem;

    margin-bottom: 0.4rem;
  }

  h2 {
    font-weight: 300;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.text.opacify(0.5)}
  }
`;
