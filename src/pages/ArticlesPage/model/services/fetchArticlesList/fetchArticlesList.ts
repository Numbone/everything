import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { Article } from 'entities/Article';
import { useSelector } from 'react-redux';
import {
    getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
} from '../../selectors/articlesPageSelectors';

interface fetchArticlesListProps{
    page:number,
    replace?:boolean
}
export const fetchArticlesList = createAsyncThunk<
    Article[],
    fetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { page = 1 } = props;
            const { extra, rejectWithValue, getState } = thunkApi;
            const sort = getArticlesPageSort(getState());
            const order = getArticlesPageOrder(getState());
            const search = getArticlesPageSearch(getState());
            const limit = getArticlesPageLimit(getState());
            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        q: search,
                        _order: order,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
