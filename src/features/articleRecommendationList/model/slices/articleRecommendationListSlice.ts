import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRecommendationListSchema } from '../types/articleRecommendationListSchema';

const initialState: ArticleRecommendationListSchema = {
    
};

export const articleRecommendationListSlice = createSlice({
    name: 'articleRecommendationList',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: articleRecommendationListActions } = articleRecommendationListSlice;
export const { reducer: articleRecommendationListReducer } = articleRecommendationListSlice;