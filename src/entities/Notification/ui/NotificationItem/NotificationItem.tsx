import React from 'react';

interface Props{
    className?: string;
}
const NotificationItem = (props:Props) => {
    const { className } = props;
    return (
        <div>NotificationItem</div>
    );
};

export { NotificationItem };
