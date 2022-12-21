import React from 'react';
import { PuffLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import { Loader } from './styles';

const Loading: React.FC = () => {
  const theme = useTheme();

  return (
    <Loader>
      <PuffLoader
        color={theme.text.color}
      />
    </Loader>
  );
};

export default Loading;
