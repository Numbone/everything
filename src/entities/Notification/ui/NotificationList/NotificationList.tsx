import React from 'react';
import { useGetNotificationsQuery } from '@/entities/Notification/api/notificationApi';
import { classNames } from '@/shared/lib/classNames/className';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface Props{
    className?: string;
}
const NotificationList = (props:Props) => {
    const { className } = props;
    const { data: notifications, isFetching } = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (isFetching) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }
    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {
                notifications?.map((item) => <NotificationItem item={item} key={item?.id} />)
            }
        </VStack>
    );
};

export { NotificationList };
