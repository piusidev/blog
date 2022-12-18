import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;

  background: ${({ theme }) => theme.background.color};

  display: flex;
  padding: 2rem;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;

  padding-left: 400px;
`;
