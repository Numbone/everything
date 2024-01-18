import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { CounterSchema } from '@/entities/Counter';
import { ProfileSchema } from '@/entities/Profile';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailsCommentSchema, ArticleDetailsPageSchema, ArticleDetailsRecommendationsSchema } from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage/model/types/articlesPageSchema';
import { ScrollRestorationSchema } from '@/features/ScrollRestoration';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema{
    counter:CounterSchema
    user:UserSchema
    ui:ScrollRestorationSchema
    [rtkApi.reducerPath]:ReturnType<typeof rtkApi.reducer>
    // async reducers
    loginForm?:LoginSchema
    profile?:ProfileSchema
    articleDetails?:ArticleDetailsSchema,
    articleDetailsPage?: ArticleDetailsPageSchema;
    articleDetailsComments?:ArticleDetailsCommentSchema,
    // articleDetailsRecommendations?:ArticleDetailsRecommendationsSchema
    addCommentForm?: AddCommentFormSchema;
    articlesPage?:ArticlesPageSchema;
//
}

export type StateSchemaKey=keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManager
}

export interface ThunkExtraArg{
    api:AxiosInstance,
    // navigate?:(to: To, options?: NavigateOptions)=> void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
