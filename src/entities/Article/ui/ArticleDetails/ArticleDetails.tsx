import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../module/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';

interface Props {
    className?: string
}
const reducers :ReducersList = {
    articleDetails: articleDetailsReducer,
};
const ArticleDetails = (props:Props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(styles.content, {}, [className])}>
                1233
            </div>
        </DynamicModuleLoader>

    );
};

export { ArticleDetails };
