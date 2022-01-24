import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DbUser } from '../../models/User';

interface UserState {
    loading: boolean;
    user?: DbUser,
    error?: any;
}

const initialState: UserState = {
    loading: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        load: (_) => {
            return { loading: true };
        },
        loaded: (_, action: PayloadAction<DbUser>) => {
            return { loading: false, user: action.payload };
        },
        error: (_, action: PayloadAction<string>) => {
            return { loading: false, error: action.payload };
        }
    }
});