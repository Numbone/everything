import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import styles from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../module/types/article';

interface Props {
    className: string
    block: ArticleTextBlock
}
const ArticleTextBlockComponent = (props:Props) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.content, {}, [className])}>
            123
        </div>
    );
};

export { ArticleTextBlockComponent };
