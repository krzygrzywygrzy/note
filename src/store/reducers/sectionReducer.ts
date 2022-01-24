import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Failure from '../../models/Failure';
import Section from '../../models/Section';
type SectionState = {
    loading: boolean;
    sections?: Section[],
    error?: Failure;
}

const initialState: SectionState = {
    loading: false,
}

export const sectionSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        load: (_) => {
            return { loading: true };
        },
        loaded: (_, action: PayloadAction<Section[]>) => {
            return { loading: false, sections: action.payload };
        },
        error: (_, action: PayloadAction<Failure>) => {
            return { loading: false, error: action.payload };
        }
    }
});

export const { load, loaded, error } = sectionSlice.actions;
export default sectionSlice.reducer;