import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Title from 'components/atoms/Title';
import ErrorFallback from 'components/molecules/ErrorBoundary';
import List from 'components/organisms/Posts';

export const Posts: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Title title="Posts" />
    <List />
  </ErrorBoundary>
);
