import { ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../../../entities/User';
import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
