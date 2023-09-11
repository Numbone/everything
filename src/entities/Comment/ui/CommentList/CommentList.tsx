import React from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface Props{
    className?: string;
    comments:Comment[];
    isLoading?:boolean;
}
const CommentList = (props:Props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.content, {}, [className])}>
            {comments.length
                ? comments.map((item) => <CommentCard isLoading={isLoading} className={styles.comment} comment={item} />)
                : <Text />}
        </div>
    );
};

export { CommentList };
