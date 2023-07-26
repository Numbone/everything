import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { User, userActions } from '../../../../../entities/User';
import { Profile } from '../../types/profile';

interface LoginByUsernameProps {
    username: string;
    password: string;
}
export const fetchProfileData = createAsyncThunk<Profile, void, { rejectValue: string, extra:ThunkExtraArg}>(
    'profile/fetchProfileData',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
