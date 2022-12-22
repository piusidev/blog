import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Title from 'components/atoms/Title';
import ErrorFallback from 'components/atoms/ErrorBoundary';

import StarList from 'components/organisms/Stars';

export const Stars: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Title title="Stars" />
    <StarList />
  </ErrorBoundary>
);
