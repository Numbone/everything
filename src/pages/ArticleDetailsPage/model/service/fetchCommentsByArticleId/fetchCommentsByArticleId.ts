import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, ThunkExtraArg } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, { rejectValue: string, extra:ThunkExtraArg}>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        if (!articleId) {
            return thunkApi.rejectWithValue('error');
        }

        try {
            const response = await thunkApi.extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('error');
        }
    },
);
