import { useAuth } from 'hooks/useAuth';
import React, { useEffect, useRef, useState } from 'react';

import {
  MoreVertical, Settings, Info, LogIn, LogOut,
} from 'react-feather';
import ThemeSwitcher from '../ThemeSwitcher';

import {
  Container, Button, Items, Item, Divider,
} from './styles';

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const { authenticated } = useAuth();

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
        <MoreVertical />
      </Button>

      <Items className={`dropdown-menu ${isOpen ? 'active' : 'inactive'}`}>
        <Item>
          <ThemeSwitcher />
        </Item>

        <Divider />

        <Item isClickable onClick={() => {}}>
          <Settings />
          Settings
        </Item>

        <Item isClickable onClick={() => {}}>
          <Info />
          About
        </Item>

        <Item isClickable onClick={() => {}}>
          {
            authenticated ? (
              <>
                <LogOut />
                Logout
              </>
            ) : (
              <>
                <LogIn />
                Login
              </>
            )
          }
        </Item>

        <Divider />

        <Item className="info">
          {`©  ${new Date().getFullYear()} -`}
          <a href="https://github.com/piusidev">Follow me on Github</a>
        </Item>
      </Items>
    </Container>
  );
};
