import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const NoData = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem 0;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const Actions = styled.div`
  align-self: flex-end;

  align-items: center;

  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.accent.color};
  color: ${({ theme }) => theme.text.color};

  padding: 0.3rem 1rem;
  border-radius: 0.3rem;

  cursor: pointer;

  transition: ${({ theme }) => theme.transition};

  &:hover {
    opacity: 0.5;
    box-shadow: ${({ theme }) => theme.boxShadow};;
  }

  svg {
    width: 1rem;
  }
`;
