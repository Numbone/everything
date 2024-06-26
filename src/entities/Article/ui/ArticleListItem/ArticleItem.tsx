import React, { HTMLAttributeAnchorTarget, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/className';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { RoutePath } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import AppLink from '@/shared/ui/AppLink/AppLink';
import styles from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface Props {
    className?:string;
    article:Article;
    view:ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
const ArticleListItem = (props:Props) => {
    const {
        article, className, view, target,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    // const onOpenArticle = useCallback(() => {
    //     navigate(RoutePath.article_details + article.id);
    // }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={styles.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.date} />
                    </div>
                    <Text title={article.title} className={styles.title} />
                    {types}
                    <img src={article.img} className={styles.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                    )}
                    <div className={styles.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
        >
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img alt={article.title} src={article.img} className={styles.img} />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={styles.title} />
            </Card>
        </AppLink>
    );
};

export { ArticleListItem };
