import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import { XCircle } from 'react-feather'
import { Error } from './styles'

const ErrorFallback: React.FC<FallbackProps> = () => (
  <Error role="alert">
    <XCircle />

    <p>Ops, something went wrong.</p>
  </Error>
)

export default ErrorFallback
