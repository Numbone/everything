import { getUserAuthData } from '@/entities/User';
import {
    Suspense, memo, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const auth = useSelector(getUserAuthData);
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? <RequireAuth roles={route?.roles}>{element}</RequireAuth>
                        : element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig)?.map(renderWithWrapper)}
            {/* {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    )}
                    path={path}
                />
            ))} */}
        </Routes>
    );
};

export default (AppRouter);
