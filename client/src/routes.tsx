import React, { useContext } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { authContext } from '@context/authContext';

import Dashboard from '@pages/Dashboard';
import Registration from '@pages/SignUp';

interface RouteProps {
    children: React.ReactNode;
}

export const GuestRoute: React.FC<RouteProps> = ({ children }) => {
    const { authUser } = useContext(authContext);
    const isAuthenticated = Boolean(authUser?.verified && authUser?.role?.length > 0);

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export const generateRoutes = (enabledModules: string[]): RouteObject[] => {
    const modules: RouteObject[] = [{ index: true, element: <Dashboard /> }];

    if (enabledModules.includes('account')) {
        modules.push({
            path: "/account",
            element: <Registration />, // Assuming Registration is the account page
        });
    }

    return modules;
};

