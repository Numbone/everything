import { ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../../../../features';
import { userReducer } from '../../../../entities/User';
import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };
    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
