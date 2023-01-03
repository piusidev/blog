import styled, { css } from 'styled-components'

interface IItemProps {
  isClickable?: boolean
}

export const Container = styled.div`
  position: relative;

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: ${({ theme }) => theme.transition};
  }

  .inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: ${({ theme }) => theme.transition};
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.accent.color};
  color: ${({ theme }) => theme.text.color};

  padding: 0.5rem;

  border: none;
  border-radius: 0.3rem;

  cursor: pointer;

  transition: all ${({ theme }) => theme.transition};

  &:hover {
    opacity: 0.8;
  }
`

export const Items = styled.div`
  width: 200px;

  position: absolute;

  top: 3rem;
  right: 0;

  z-index: 100;

  border-radius: 0.5rem;

  margin-top: 0.5rem;

  background: ${({ theme }) => theme.accent.color};
  box-shadow: ${({ theme }) => theme.boxShadow};

  .info {
    font-size: 0.7rem;

    color: ${({ theme }) => theme.text.opacify(0.7)};
  }
`

export const Item = styled.div<IItemProps>`
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;

  svg {
    width: 1rem;
  }

  transition: ${({ theme }) => theme.transition};

  a {
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 0.3;
    }
  }

  ${({ isClickable }) => {
    if (isClickable) {
      return css`
        cursor: pointer;

        &:hover {
          opacity: 0.3;
        }
      `
    }

    return false
  }}
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.text.opacify(0.1)};
`
