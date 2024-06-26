import {
    ReducersMapObject, combineReducers, configureStore, getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { CombinedState, Reducer } from 'redux';
import { $api } from '@/shared/api/api';
import { uiReducer } from '@/features/ScrollRestoration';
import { rtkApi } from '@/shared/api/rtkApi';
import { userReducer } from '../../../../entities/User';
import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
//
export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    // navigate?:(to: To, options?: NavigateOptions)=> void,
) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };
    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => (getDefaultMiddleware)({
            thunk: {
                extraArgument: {
                    api: $api,
                    // navigate,
                },
            },
        }).concat(rtkApi.middleware),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
export type AppDispatch=ReturnType<typeof createReduxStore>['dispatch'];
