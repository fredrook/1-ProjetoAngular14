import { createReducer, on } from '@ngrx/store';
import { login, logout } from './actions';

export interface State {
  isAuthenticated: boolean;
  user: {
    email: string;
    password: string;
  };
}

export const initialState: State = {
  isAuthenticated: false,
  user: {
    email: '',
    password: ''
  }
};

export const reducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({ ...state, isAuthenticated: true, user })),
  on(logout, state => ({ ...state, isAuthenticated: false, user: initialState.user }))
);
