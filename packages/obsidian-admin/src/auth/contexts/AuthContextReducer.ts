import { AuthState } from './AuthContext';

interface Action {
  type: 'LOGIN' | 'LOGOUT';
  payload?: any;
}

function AuthContextReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return {
        authenticated: true,
        profile: action.payload,
      };
    case 'LOGOUT':
      return {
        authenticated: false,
      };
    default:
      return state;
  }
}

export default AuthContextReducer;
