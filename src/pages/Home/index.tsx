import { Menu, MenuItem } from 'components/atoms/Menu';
import React from 'react';
import { Page, Header } from './styles';

export const Home: React.FC = () => (
  <Page>
    <Header>
      <Menu>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
        <MenuItem>Menu Item 4</MenuItem>
        <MenuItem>Menu Item 5</MenuItem>
      </Menu>
    </Header>

  </Page>
);
