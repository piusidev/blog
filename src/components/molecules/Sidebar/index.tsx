import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Item, Sidebar } from './styles';

import { items } from './data';

const Component: React.FC = () => {
  const location = useLocation();

  return (
    <Sidebar>
      {
        items.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link to={item.path}>
              <Item key={index} className={`${isActive && 'item-active'}`}>
                {item.icon}

                <p>{item.title}</p>

                <span>{item.total}</span>
              </Item>
            </Link>
          );
        })
      }
    </Sidebar>
  );
};

export default Component;
