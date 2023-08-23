import { getUserAuthData } from 'entities/User';
import {
    Suspense, memo, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';
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
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    // FIXME: fix with router route.authOnly ? <RequireAuth>{element}</RequireAuth> :
                    element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {/* {Object.values(routeConfig)?.map(renderWithWrapper)} */}
            {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                    path={path}
                />
            ))}
        </Routes>
    );
};

export default (AppRouter);
