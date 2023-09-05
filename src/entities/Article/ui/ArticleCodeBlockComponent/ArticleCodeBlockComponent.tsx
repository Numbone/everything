import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { ArticleCodeBlock } from '../../module/types/article';
import styles from './ArticleCodeBlockComponent.module.scss';

interface Props {
    className?: string;
    block: ArticleCodeBlock
}
const ArticleCodeBlockComponent = (props:Props) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.content, {}, [className])}>
            123
        </div>
    );
};

export { ArticleCodeBlockComponent };
