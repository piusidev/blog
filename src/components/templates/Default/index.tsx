import { Menu } from 'components/atoms/Menu';
import Sidebar from 'components/molecules/Sidebar';
import React from 'react';
import {
  Container, Section, Header,
} from './styles';

interface ITemplateProps {
  children: React.ReactElement | React.ReactElement[]
}

const Template: React.FC<ITemplateProps> = ({ children }) => (
  <Container>
    <Sidebar />

    <Section>
      <Header>
        <Menu />
      </Header>

      {children}
    </Section>
  </Container>
);

export default Template;
