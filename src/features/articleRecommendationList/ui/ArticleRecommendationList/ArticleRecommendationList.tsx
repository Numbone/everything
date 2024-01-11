import { classNames } from '@/shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { rtkApi } from '@/shared/api/rtkApi';
import { useGetArticleRecommendationsListQuery } from '@/features/articleRecommendationList/api/articleRecommendationApi';
import cls from './ArticleRecommendationList.module.scss';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { data, isLoading, error } = useGetArticleRecommendationsListQuery(3);
    if (!data || isLoading || error) {
        return null;
    }
    return (
        <VStack gap="8" className={classNames(cls.ArticleRecommendationList, {}, [className])}>
            <Text size={TextSize.L} className={cls.commentTitle} title={t('article.recommendation')} />
            <ArticleList
                className={cls.recommendation}
                articles={data}
                // isLoading={false}
                target="_blank"
                virtualized={false}
            />
        </VStack>
    );
});
