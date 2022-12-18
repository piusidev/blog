import React from 'react';

import List from 'components/organisms/Posts';
import { Title } from 'components/atoms/Title';

export const Posts: React.FC = () => (
  <div>
    <Title title="Posts" />
    <List />
  </div>
);
