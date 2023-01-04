import React from 'react'

import Title from '@/components/atoms/Title'
import Repos from '@/components/organisms/Repos'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/atoms/ErrorBoundary'

const Page: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Title title="Projects" />
    <Repos />
  </ErrorBoundary>
)

export default Page
