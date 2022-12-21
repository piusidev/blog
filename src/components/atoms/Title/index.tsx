import React from 'react';
import { Text } from './styles';

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => <Text>{title}</Text>;

export default Title;
