import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.background.color};

  display: flex;
  gap: 2rem;

  padding: 1rem;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;
