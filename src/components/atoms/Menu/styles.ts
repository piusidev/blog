import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 150ms ease;
  }

  .inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 150ms ease;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.accent.color};
  color: ${({ theme }) => theme.text.color};

  padding: 0.5rem;

  border: none;
  border-radius: 0.3rem;

  cursor: pointer;

  transition: all 150ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const Items = styled.div`
  width: 200px;

  position: absolute;

  top: 3rem;
  right: 0;

  border-radius: 0.5rem;

  padding: 1rem;
  margin-top: 0.5rem;

  background: ${({ theme }) => theme.accent.color};
  box-shadow: rgb(255 255 255 / 5%) 0px 0px 0px 1px inset,
              rgb(0 0 0 / 4%) 0px 2px 8px,
              rgb(0 0 0 / 5%) 0px 30px 70px;
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 1rem;

  &:hover {
    opacity: 0.5;
  }
`;
