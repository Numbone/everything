import { NotificationState } from '@/entities/Notification/modal/types/notifications';
import React from 'react';
import { classNames } from '@/shared/lib/classNames/className';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui';
import cls from './NotificationItem.module.scss';

interface Props{
    className?: string;
    item:NotificationState;
}
const NotificationItem = (props:Props) => {
    const { className, item } = props;
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
};

export { NotificationItem };
