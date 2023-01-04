import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import BlogPost from '@/components/organisms/Post'
import ErrorFallback from '@/components/atoms/ErrorBoundary'

const Page: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BlogPost />
  </ErrorBoundary>
)

export default Page
