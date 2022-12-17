import { lighten, rgba } from 'polished';
import styled from 'styled-components';

export const Sidebar = styled.section`
  width: 100%;
  max-width: 400px;

  background: ${({ theme }) => theme.accent.color};

  padding: 3rem;
  border-radius: 1rem;

  .item-active {
    background-color: ${({ theme }) => theme.text.opacify(0.1)};
  }
`;

export const Item = styled.div`
  width: 100%;
  max-height: 3rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.7rem;
  margin-bottom: 0.2rem;
  border-radius: 0.5rem;

  cursor: pointer;
  transition: background-color 0.15s ease 0s;

  &:hover {
    background-color: ${({ theme }) => theme.text.opacify(0.1)};
  }

  svg {
    width: 0.9rem;
  }

  p, span {
    font-size: 0.9rem;
  }

  span {
    width: 1.5rem;

    text-align: center;

    border-radius: 0.3rem;
    margin-left: auto;

    color: ${({ theme }) => rgba(theme.text.color, 0.5)};
    background-color: ${({ theme }) => lighten(0.1, theme.accent.color)};
  }
`;
