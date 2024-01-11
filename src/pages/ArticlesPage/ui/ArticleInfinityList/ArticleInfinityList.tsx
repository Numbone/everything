import { ArticleList } from '@/entities/Article';
import {
    getArticlesPageError, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { initArticlesPage } from '@/pages/ArticlesPage/model/services/initedArticlePage/initedArticlePage';
import { getArticles } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

interface Props{
    className?: string
}
const ArticleInfinityList = (props:Props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);

    const isLoading = useSelector(getArticlesPageIsLoading);

    const error = useSelector(getArticlesPageError);

    const view = useSelector(getArticlesPageView);

    const inited = useSelector(getArticlesPageInited);

    const [searchParams] = useSearchParams();

    const { t } = useTranslation();

    useInitialEffect(() => {
        if (!inited) {
            dispatch(initArticlesPage(searchParams));
        }
    });
    return (

        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />

    );
};

export default ArticleInfinityList;
