import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react'

import { authenticate } from '@/api/auth'
import { api } from '@/services/api'
import Store from '@/utils/store'

import routes from '@/config/routes'
import { IUseAuthContextData, IUseAuthProviderProps } from './types'
import { useRouter } from 'next/router'

const authStore = Store('auth')

const UseAuthContext = createContext<IUseAuthContextData>(
  {} as IUseAuthContextData
)

const UseAuthProvider: React.FC<IUseAuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const token = ''

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`

      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  const handleLogin = useCallback(async (): Promise<void> => {
    const {
      data: { token },
    } = await authenticate()

    authStore.set(token)

    api.defaults.headers.Authorization = `Bearer ${token}`
    setAuthenticated(true)

    router.push(routes.home)
  }, [router])

  const handleLogout = useCallback((): void => {
    authStore.clear()

    api.defaults.headers.Authorization = null
    setAuthenticated(false)

    router.push(routes.home)
  }, [router])

  const contextValue = useMemo(
    () => ({
      authenticated,
      loading,
      handleLogin,
      handleLogout,
    }),
    [authenticated, loading, handleLogin, handleLogout]
  )

  return (
    <UseAuthContext.Provider value={contextValue}>
      {children}
    </UseAuthContext.Provider>
  )
}

const useAuth = (): IUseAuthContextData => {
  const context = useContext(UseAuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an UseAuthProvider')
  }

  return context
}

export { UseAuthProvider, useAuth }
