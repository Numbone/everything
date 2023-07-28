import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
    ReduxStoreWithManager, StateSchema, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager, AppDispatch, ThunkExtraArg, ThunkConfig,
};
