import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage/model/selectors/comment';
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/service/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';
import { getArticleComments } from '@/pages/ArticleDetailsPage/model/slice/articleCommentSlice';
import { classNames } from '@/shared/lib/classNames/className';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import ArticleDetailComments from '../ArticleDetailComments/ArticleDetailComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducer:ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        // dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('article.Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationList />
                {/* <Text size={TextSize.L} className={cls.commentTitle} title={t('article.recommendation')} />
                <ArticleList
                    className={cls.recommendation}
                    articles={recommendation}
                    isLoading={recommendationIsLoading}
                    target="_blank"
                /> */}
                <ArticleDetailComments id={id} />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
