import React, { useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import styles from './ArticleSortSelector.module.scss';

interface Props {
  className?:string;
  sort:ArticleSortField;
  order:SortOrder;
  onChangeOrder:(newOrder:SortOrder) => void;
  onChangeSort:(newOrder:ArticleSortField) => void;
}
const ArticleSortSelector = (props:Props) => {
    const {
        className,
        onChangeOrder,
        onChangeSort,
        order,
        sort,
    } = props;

    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('article.ascendance'),
        },
        {
            value: 'des',
            content: t('article.descendance'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('article.created'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('article.title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('article.views'),
        },
    ], [t]);

    const changeSortHandler = useCallback((newSort:string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newSort:string) => {
        onChangeOrder(newSort as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(styles.content, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('article.sorting')}
                value={sort}
                onChange={onChangeOrder}
            />
            <Select
                options={orderOptions}
                label={t('article.to')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};

export { ArticleSortSelector };
