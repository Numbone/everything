import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import styles from './ArticlesPageFilters.module.scss';

interface Props{
  className?:string
}
const ArticlesPageFilters = (props:Props) => {
    const { className } = props;

    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ page: 1, replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder:SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newOrder:ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((newOrder:string) => {
        dispatch(articlesPageActions.setSearch(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(styles.content, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                    sort={sort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={styles.search}>
                <Input onChange={onChangeSearch} value={search} placeholder="search" />
            </Card>

        </div>
    );
};

export default ArticlesPageFilters;
