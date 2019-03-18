import LoginForme from '../../LoginForm';
import RegisterForme from '../../RegisterForm';

export const routes = [
    {
        exact: false,
        path: '/login/login',
        component: LoginForme
    },
    {
        exact: false,
        path: '/login/register',
        component: RegisterForme
    }
];

