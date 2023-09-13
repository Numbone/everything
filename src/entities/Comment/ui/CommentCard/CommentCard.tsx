import React from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';
import { Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface Props{
  className?:string;
  comment?:Comment;
  isLoading?:boolean;
}
const CommentCard = (props:Props) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(styles.CommentCard, {}, [className, styles.isLoading])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={styles.username} height={16} width={100} />
                </div>
                <Skeleton className={styles.text} width="100%" height={50} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(styles.CommentCard, {}, [])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
                {comment.user.avatar ? <Avatar src={comment.user.avatar} size={30} /> : null}
                <Text className={styles.username} title={comment.user.username} />
            </AppLink>
            <Text className={styles.text} text={comment.text} />
        </div>
    );
};

export { CommentCard };
