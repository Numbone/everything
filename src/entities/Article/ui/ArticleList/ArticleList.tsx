import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Text } from 'shared/ui';
import { TextSize } from 'shared/ui/Text/Text';
import {
    AutoSizer, List, WindowScroller, ListRowProps,
} from 'react-virtualized';
import { PAGE_ID } from 'widjet/Page/Page';
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

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 5;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);
    const rowRender = ({
        index, isScrolling, key, style,
    }:ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
        // eslint-disable-next-line no-plusplus
        for (let i = fromIndex; i < toIndex; i++) {
            items.push(
                <ArticleListItem
                    article={articles[index]}
                    view={view}
                    target={target}
                    className={styles.card}
                    key={`str${i}`}
                />,
            );
        }
        return (
            <div
                key={key}
                style={style}
                className={styles.row}
            >
                {items}

            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        // <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        //     {
        //         articles.length > 0
        //             ? articles.map((article) => <ArticleListItem target={target} key={article.id} article={article} view={view} />)
        //             : null
        //     }
        //     {
        //         isLoading && getSkeletons(view)
        //     }
        //      </div>
        <WindowScroller
            onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                isScrolling,
                onChildScroll,
                scrollLeft,
                scrollTop,
            }) => (
                <div
                    ref={registerChild as any}
                    className={classNames(styles.ArticleList, {}, [className, styles[view]])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    { isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>

    );
});

export { ArticleList };
