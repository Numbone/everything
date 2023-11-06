import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Text } from 'shared/ui';
import { TextSize } from 'shared/ui/Text/Text';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface Props{
    className?: string;
    articles:Article[];
    isLoading?: boolean;
    view?:ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
const ArticleList = memo((props:Props) => {
    const { t } = useTranslation();
    const {
        articles,
        isLoading,
        view = ArticleView.SMALL,
        className,
        target,
    } = props;
    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={styles.card} key={index as number} view={view} />
        ));
    const renderArticle = (article:Article) => {
        <ArticleListItem article={article} view={view} />;
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {/* {
                articles.length > 0
                    ? articles.map((article) => <ArticleListItem target={target} key={article.id} article={article} view={view} />)
                    : null
            }
            {
                isLoading && getSkeletons(view)
            } */}
            <AutoSizer disableHeight>
                {({ width }) => (
                    <List
                        ref="List"
                        className={styles.List}
                        height={listHeight}
                        overscanRowCount={overscanRowCount}
                        noRowsRenderer={this._noRowsRenderer}
                        rowCount={rowCount}
                        rowHeight={
                            useDynamicRowHeight ? this._getRowHeight : listRowHeight
                        }
                        rowRenderer={this._rowRenderer}
                        scrollToIndex={scrollToIndex}
                        width={width}
                    />
                )}
            </AutoSizer>
        </div>
    );
});

export { ArticleList };
