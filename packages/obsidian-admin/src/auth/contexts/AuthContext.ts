import React from 'react';

export interface AuthState {
  authenticated: boolean;
  profile?: any;
}

export const initialState: AuthState = {
  authenticated: false,
}

type ReactContext = { state: AuthState, dispatch: React.Dispatch<any> };
const AuthContext = React.createContext<ReactContext>({ state: initialState, dispatch: () => {} });

export default AuthContext;
