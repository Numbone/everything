import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/className';
import { Code } from '@/shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface Props {
    className?: string;
    block: ArticleCodeBlock
}
const ArticleCodeBlockComponent = memo((props:Props) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.content, {}, [className])}>
            <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
                <Code text={block.code} />
            </div>
        </div>
    );
});

export { ArticleCodeBlockComponent };
