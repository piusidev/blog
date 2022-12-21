import React from 'react';
import { StyledTag } from './styles';

interface ITagProps {
  name: string
}

const Tag: React.FC<ITagProps> = ({ name }) => <StyledTag>{name}</StyledTag>;

export default Tag;
