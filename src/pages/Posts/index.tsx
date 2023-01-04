import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Title from '@/components/atoms/Title'
import ErrorFallback from '@/components/atoms/ErrorBoundary'
import List from '@/components/organisms/Posts'

const Page: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Title title="Posts" />
    <List />
  </ErrorBoundary>
)

export default Page
