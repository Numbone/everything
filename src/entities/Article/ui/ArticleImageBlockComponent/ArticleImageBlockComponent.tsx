import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../module/types/article';

interface Props {
    className?: string;
    block: ArticleImageBlock
}
const ArticleImageBlockComponent = (props:Props) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.content, {}, [className])}>
            123
        </div>
    );
};

export { ArticleImageBlockComponent };
