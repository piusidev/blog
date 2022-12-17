import Sidebar from 'components/molecules/Sidebar';
import React from 'react';
import { Section } from './styles';

interface ITemplateProps {
  children: React.ReactElement | React.ReactElement[]
}

const Template: React.FC<ITemplateProps> = ({ children }) => (
  <Section>
    <Sidebar />
    {children}
  </Section>
);

export default Template;
