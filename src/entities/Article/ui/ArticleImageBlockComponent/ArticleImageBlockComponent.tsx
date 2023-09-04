import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import styles from './ArticleImageBlockComponent.module.scss';

interface Props {
    className: string
}
const ArticleImageBlockComponent = (props:Props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.content, {}, [])}>
            123
        </div>
    );
};

export { ArticleImageBlockComponent };
