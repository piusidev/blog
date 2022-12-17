import React, { useEffect, useRef, useState } from 'react';

import { MoreVertical } from 'react-feather';

import {
  Container, Button, Items, Item,
} from './styles';

interface IMenuProps {
  buttonName?: string;
  Icon?: React.FC;
  isIcon?: boolean;
  children: ReactChildren
}

interface IMenuItemProps {
  children: ReactChildren
}

export const Menu: React.FC<IMenuProps> = ({
  buttonName, isIcon = false, Icon = MoreVertical, children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  });

  return (
    <Container ref={ref}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {!buttonName || isIcon ? <Icon /> : buttonName}
      </Button>

      <Items className={`dropdown-menu ${isOpen ? 'active' : 'inactive'}`}>
        {children}
      </Items>
    </Container>
  );
};

export const MenuItem: React.FC<IMenuItemProps> = ({ children }) => (
  <Item>
    {children}
  </Item>
);
