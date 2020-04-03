import React, { useState, useEffect } from 'react';

import { isSignedIn } from '../helpers/auth';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const token = await isSignedIn();

      setIsAuth(!!token);

      setLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
