import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import styles from './ArticleTextBlockComponent.module.scss';

interface Props {
    className: string
}
const ArticleTextBlockComponent = (props:Props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.content, {}, [])}>
            123
        </div>
    );
};

export { ArticleTextBlockComponent };