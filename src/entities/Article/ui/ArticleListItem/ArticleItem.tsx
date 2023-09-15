import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface Props {
    className?:string;
    article:Article;
    view:ArticleView
}
const ArticleListItem = (props:Props) => {
    const { article, className, view } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={styles.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
            ArticleItem
        </div>;
    }
    return (
        <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
            <Card className={styles.card} onClick={onOpenArticle}>
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
        </div>
    );
};

export { ArticleListItem };
