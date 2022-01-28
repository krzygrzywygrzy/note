import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesReducer";
import sectionReducer from "./reducers/sectionReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    section: sectionReducer,
    notes: notesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
