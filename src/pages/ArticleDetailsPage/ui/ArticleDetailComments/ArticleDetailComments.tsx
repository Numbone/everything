import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/lib/classNames/className';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage/model/selectors/comment';
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/service/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '@/pages/ArticleDetailsPage/model/slice/articleCommentSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticleDetailComments.module.scss';

interface Props{
    className?:string
    id:string;
}
const ArticleDetailComments = (props:Props) => {
    const { t } = useTranslation('article');
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        // dispatch(fetchArticleRecommendations());
    });

    return (
        <div className={classNames(cls.content, {}, [])}>
            <Text size={TextSize.L} className={cls.commentTitle} title={t('article.commentary')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </div>
    );
};

export default ArticleDetailComments;
