import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import BlogPost from '@/components/organisms/Post'
import ErrorFallback from '@/components/atoms/ErrorBoundary'

export const Post: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BlogPost />
  </ErrorBoundary>
)
