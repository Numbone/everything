import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../type/loginSchema';

const initialState:LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
};
export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
    },

});
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
