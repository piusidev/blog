import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from 'react';
import { useHistory } from 'react-router-dom';

import { authenticate } from 'api/auth';
import api from 'services/api';
import Store from 'utils/store';

import routes from 'config/routes';
import { IUseAuthContextData, IUseAuthProviderProps } from './types';

const authStore = Store('auth');

const UseAuthContext = createContext<IUseAuthContextData>(null);

const UseAuthProvider: React.FC<IUseAuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const token: string = authStore.get();

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (): Promise<void> => {
    const { data: { token } } = await authenticate();

    authStore.set(token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);

    history.push(routes.home.path);
  };

  const handleLogout = (): void => {
    authStore.clear();

    api.defaults.headers.Authorization = undefined;
    setAuthenticated(false);

    history.push(routes.login.path);
  };

  const contextValue = useMemo(() => ({
    authenticated,
    loading,
    handleLogin,
    handleLogout,
  }), [authenticated, loading, handleLogin, handleLogout]);

  return (
    <UseAuthContext.Provider value={contextValue}>
      {children}
    </UseAuthContext.Provider>
  );
};

const useAuth = (): IUseAuthContextData => {
  const context = useContext(UseAuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an UseAuthProvider');
  }

  return context;
};

export { UseAuthProvider, useAuth };
