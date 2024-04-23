import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserAuthData } from '@/entities/User';
import { UserRole } from '@/entities/User/model/type/user';
import { RoutePath } from '@/shared/const/router';
import { getUserRoles } from '@/entities/User/model/selectors/roleSelector/roleSelector';

interface Props{
    children: JSX.Element;
    roles?:UserRole[]
}
export function RequireAuth({ children, roles }:Props) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requireRole) => {
            const hasRole = userRoles?.includes(requireRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
