import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Component] Login',
  props<{ user: { email: string, password: string } }>()
);

export const logout = createAction('[Dashboard Component] Logout');