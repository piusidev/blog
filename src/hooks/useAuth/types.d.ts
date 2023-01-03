export interface IUseAuthContextData {
  authenticated: boolean
  loading: boolean
  handleLogin: () => Promise<void>
  handleLogout: () => void
}

export interface IUseAuthProviderProps {
  children: React.ReactNode
}
