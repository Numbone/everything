import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useSelector } from 'react-redux';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import styles from './ArticlesPageFilters.module.scss';

interface Props{
  className?:string
}
const ArticlesPageFilters = (props:Props) => {
    const { className } = props;

    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <div className={classNames(styles.content, {}, [className])}>
            <div className={styles.sortWrapper}>
                <Select label={t('article.sorting')} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={styles.search}>
                <Input placeholder="search" />
            </Card>

        </div>
    );
};

export default ArticlesPageFilters;
