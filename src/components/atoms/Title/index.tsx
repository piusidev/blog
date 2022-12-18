import React from 'react';
import { Text } from './styles';

interface ITitleProps {
  title: string;
}

export const Title: React.FC<ITitleProps> = ({ title }) => <Text>{title}</Text>;
