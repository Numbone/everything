import { rtkApi } from 'shared/api/rtkApi';
import { NotificationState } from '../modal/types/notifications';

export const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<NotificationState[], null>({
            query: (limit) => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const { useGetNotificationsQuery } = notificationsApi;
