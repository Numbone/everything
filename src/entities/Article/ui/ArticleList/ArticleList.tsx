import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface Props{
    className?: string;
    articles:Article[];
    isLoading?: boolean;
    view:ArticleView
}
const ArticleList = memo((props:Props) => {
    const { t } = useTranslation();
    const {
        articles,
        isLoading,
        view = ArticleView.SMALL,
        className,
    } = props;
    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={styles.card} key={index as number} view={view} />
        ));
    const renderArticle = (article:Article) => {
        <ArticleListItem article={article} view={view} />;
    };
    if (isLoading) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }
    return (
        <div className={classNames(styles.content, {}, [])}>
            {
                articles.length > 0
                    ? articles.map((article) => <ArticleListItem key={article.id} article={article} view={view} />)
                    : null
            }
        </div>
    );
});

export { ArticleList };
