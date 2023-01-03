import { lighten, rgba } from 'polished'
import styled from 'styled-components'

interface IContainerProps {
  isOpen: boolean
}

export const Container = styled.section<IContainerProps>`
  position: fixed;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  max-width: 400px;

  padding: 1rem;

  transition: ${({ theme }) => theme.transition};

  z-index: 2;

  @media (max-width: 991px) {
    top: unset;

    bottom: ${({ isOpen }) => (isOpen ? '0' : 'calc(-100% + 4rem);')};

    max-width: unset;
  }
`

export const Tab = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.accent.color};

  border-radius: 1.5rem 1.5rem 0 0;

  @media (min-width: 991px) {
    display: none;
  }
`

export const Sidebar = styled.div`
  height: 100%;
  width: 100%;

  background: ${({ theme }) => theme.accent.color};

  padding: 3rem;
  border-radius: 1.5rem;

  @media (max-width: 991px) {
    top: unset;
    left: unset;

    border-radius: 0 0 1.5rem 1.5rem;
  }

  .item-active {
    background-color: ${({ theme }) => theme.text.opacify(0.1)};

    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`

export const Item = styled.div`
  width: 100%;
  max-height: 3rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.7rem;
  margin-bottom: 0.2rem;
  border-radius: 0.7rem;

  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.text.opacify(0.1)};

    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  svg {
    width: 0.9rem;
  }

  p,
  span {
    font-size: 0.9rem;
  }

  span {
    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.3rem;
    margin-left: auto;

    color: ${({ theme }) => rgba(theme.text.color, 0.5)};
    background-color: ${({ theme }) => lighten(0.1, theme.accent.color)};
  }
`
