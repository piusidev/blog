import styled from 'styled-components';

export const Sidebar = styled.section`
  width: 350px;
  background: ${({ theme }) => theme.accent};

  padding: 3rem;
  border-radius: 1rem;

  .item-active {
    background-color: rgb(57, 61, 70);
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
    background-color: rgb(57, 61, 70);
  }

  svg {
    width: 0.9rem;
  }

  p, span {
    font-size: 0.9rem;
  }

  span {
    margin-left: auto;
  }
`;
