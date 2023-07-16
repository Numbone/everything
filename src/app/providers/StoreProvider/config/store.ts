import { ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'features';
import { userReducer } from '../../../../entities/User';
import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
