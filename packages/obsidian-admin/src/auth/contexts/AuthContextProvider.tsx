import React, { useMemo, useReducer } from 'react';
import AuthContextReducer from './AuthContextReducer';
import AuthContext, { initialState } from './AuthContext';

interface Props {
  children: React.ReactNode;
}

function AuthContextProvider(props: Props) {
  const { children } = props;

  const [state, dispatch] = useReducer(AuthContextReducer, initialState);
  const context = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
