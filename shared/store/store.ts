import { configureStore } from "@reduxjs/toolkit";
import tableUi from "./tableUiSlice";
import ws from "./wsSlice";

export const store = configureStore({
  reducer: { tableUi, ws },
  middleware: (gDM) => gDM({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
