import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Failure from '../../models/Failure';
import { DbUser } from '../../models/User';

interface UserState {
    loading: boolean;
    user?: DbUser,
    error?: Failure;
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
        error: (_, action: PayloadAction<Failure>) => {
            return { loading: false, error: action.payload };
        },
        signOut: (_) => {
            return { ...initialState };
        },
    }
});

export const { load, loaded, error, signOut } = userSlice.actions;
export default userSlice.reducer;