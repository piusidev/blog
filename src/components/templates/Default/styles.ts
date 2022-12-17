import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.background};

  display: flex;

  padding: 1rem;
`;
