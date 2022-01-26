import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { load, loaded, error as sectionError } from "../reducers/sectionReducer";
import { supabase } from "../../supabaseClient";
import SupabaseTables from "../../models/SupabaseTables";
import Section from "../../models/Section";

/**
 * Thnuk action that gets section list
 */
export const thunkGetSections = ():
    ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (
        dispatch:
            ThunkDispatch<RootState, unknown, AnyAction>,
        getState: () => RootState,
    ) => {
        try {

            dispatch({ type: load })

            //get user data from reducer
            var user = getState().user.user;
            if (!user) throw Error("no user logged in!");

            //get sections from supabase
            var { data, error } =
                await supabase.from(SupabaseTables.SECTION).select().eq("user_id", user.id);

            if (error) throw error;
            dispatch({ type: loaded, payload: data ?? [] });

        } catch (err: any) {
            dispatch({ type: sectionError, payload: { message: err.error_description || err.message } });
        }
    }
}

export const thunkAddSection = (newSection: Section):
    ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (
        dispatch:
            ThunkDispatch<RootState, unknown, AnyAction>,
        getState: () => RootState,
    ) => {
        try {
            var oldSections = getState().section.sections;
            if (!oldSections) throw Error("Your pages are null!");

            dispatch({ type: loaded, payload: [...oldSections, newSection] })

        } catch (err: any) {
            dispatch({ type: sectionError, payload: { message: err.error_description || err.message } });
        }
    }
}
