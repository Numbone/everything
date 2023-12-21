import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvatatDropdownSchema } from '../types/avatarDropdownSchema';

const initialState: AvatatDropdownSchema = {
    
};

export const avatatDropdownSlice = createSlice({
    name: 'avatatDropdown',
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

export const { actions: avatatDropdownActions } = avatatDropdownSlice;
export const { reducer: avatatDropdownReducer } = avatatDropdownSlice;