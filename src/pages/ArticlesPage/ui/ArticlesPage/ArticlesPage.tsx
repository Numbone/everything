import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { Page } from 'widjet/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initedArticlePage/initedArticlePage';
import cls from './ArticlesPage.module.scss';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticleInfinityList from '../ArticleInfinityList/ArticleInfinityList';

interface ArticlesPageProps {
    className?: string;
}

const reducer:ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfinityList className={cls.list} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
