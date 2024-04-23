import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User/model/type/user';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?:UserRole[];
}
