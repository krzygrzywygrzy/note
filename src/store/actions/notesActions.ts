import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import SupabaseTables from "../../models/SupabaseTables";
import { supabase } from "../../supabaseClient";
import { load, error, loaded } from "../reducers/notesReducer";
import { RootState } from "../store";

export const thunkGetNotes = (
  section_id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch({ type: load });
      const { data, error } = await supabase
        .from(SupabaseTables.NOTES)
        .select()
        .eq("section_id", section_id);
      if (error) throw error;

      dispatch({ type: loaded, payload: data });
    } catch (err: any) {
      dispatch({
        type: error,
        payload: { message: err.error_description || err.message },
      });
    }
  };
};
