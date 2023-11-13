import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Text } from 'shared/ui';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface Props{
    className?: string;
    comments:Comment[];
    isLoading?:boolean;
}
const CommentList = (props:Props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();
    if (isLoading) {
        <div className={classNames(styles.content, {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </div>;
    }

    return (
        <div className={classNames(styles.content, {}, [className])}>
            {comments.length
                ? comments.map((item) => <CommentCard key={item?.id} isLoading={isLoading} className={styles.comment} comment={item} />)
                : <Text />}
        </div>
    );
};

export { CommentList };
