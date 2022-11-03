export interface IUseAuthContextData {
  authenticated: Boolean
  loading: Boolean
  handleLogin: () => Promise<void>
  handleLogout: () => void
}

export interface IUseAuthProviderProps {
  children: React.ReactNode
}
