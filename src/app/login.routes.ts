import { AuthGuard }          from './auth/auth.guard';
import { AuthService }        from './auth/auth.service';
import { LoginComponent }     from './login.component';

export const LoginRoutes = [
  { path: 'login', component: LoginComponent }
];

export const AUTH_PROVIDERS = [AuthGuard, AuthService];
