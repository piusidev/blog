import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Container, Sidebar, Item } from './styles';

import { items } from './data';

const Component: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <Sidebar>
        {
          items.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link to={item.path} key={index}>
                <Item className={`${isActive && 'item-active'}`}>
                  {item.icon}

                  <p>{item.title}</p>

                  <span>{item.total}</span>
                </Item>
              </Link>
            );
          })
        }
      </Sidebar>
    </Container>
  );
};

export default Component;
