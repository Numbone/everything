import { uiReducer, uiActions } from '@/features/ScrollRestoration/model/slices/ScrollSlice';
import { getUIScrollByPath } from './model/selectors/getUIScroll';

export { getUIScrollByPath };
export type { ScrollRestorationSchema } from './model/types/ScrollSchema';
export { uiReducer, uiActions };
