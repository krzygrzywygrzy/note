import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Failure from "../../models/Failure";
import { Note } from "../../models/Note";

interface NoteState {
  loading: boolean;
  notes?: Note[];
  error?: Failure;
}

const initialState: NoteState = {
  loading: false,
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    load: (_) => {
      return { loading: true };
    },
    loaded: (_, action: PayloadAction<Note[]>) => {
      return { loading: false, user: action.payload };
    },
    error: (_, action: PayloadAction<Failure>) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { load, loaded, error } = noteSlice.actions;
export default noteSlice.reducer;
