import { useGetNotificationsQuery } from 'entities/Notification/api/notificationApi';
import React from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface Props{
    className?: string;
}
const NotificationList = (props:Props) => {
    const { className } = props;
    const { data: notifications, isFetching } = useGetNotificationsQuery(null);

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {
                notifications?.map((item) => <NotificationItem item={item} />)
            }
        </VStack>
    );
};

export { NotificationList };
