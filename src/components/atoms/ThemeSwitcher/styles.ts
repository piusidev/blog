import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 0.8rem;

    color: ${({ theme }) => theme.text.opacify(0.7)};

    margin-bottom: 0.5rem;
  }

  .active {
    background: ${({ theme }) => theme.accent.color};
    box-shadow: ${({ theme }) => theme.boxShadow};

    transition: ${({ theme }) => theme.transition};
    opacity: 1;
  }
`;

export const Switcher = styled.div`
  background-color: ${({ theme }) => theme.background.color};

  border-radius: 0.5rem;

  display: flex;
  justify-content: space-between;

  gap: 1rem;

  padding: 0.2rem;
`;

export const Option = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  padding: 0.3rem 0.5rem;

  border-radius: inherit;

  cursor: pointer;

  opacity: 0.5;

  transition: ${({ theme }) => theme.transition};

  &:hover {
    opacity: 1;
  }

  svg {
    width: 1rem;
  }
`;
