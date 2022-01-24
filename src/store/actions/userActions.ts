import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { load, loaded, error } from "../reducers/userReducer";
import { supabase } from "../../supabaseClient";
import SupabaseTables from "../../models/SupabaseTables";

/**
 * Thunk action that gets primary user data from supabase
 */
export const thunkGetUser = ():
    ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch:
        ThunkDispatch<RootState, unknown, AnyAction>) => {
        try {
            dispatch({ type: load });
            const { data, error } =
                await supabase.from(SupabaseTables.USER).
                    select().eq("user_id", supabase.auth.user()!.id).single();

            if (error) throw error;
            if (!data) throw Error("No such user");
            dispatch({ type: loaded, payload: data });
        } catch (err: any) {
            dispatch({ type: error, payload: { message: err.error_description || err.message } });
        }

    }
}