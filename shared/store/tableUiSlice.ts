import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Sort = { key: string; dir: "asc" | "desc" };

type State = {
  sorts: Sort[];
  pinnedIds: string[];
};

const initial: State = {
  sorts: [{ key: "volume24h", dir: "desc" }],
  pinnedIds: [],
};

const slice = createSlice({
  name: "tableUi",
  initialState: initial,
  reducers: {
    toggleSort(state, action: PayloadAction<string>) {
      const k = action.payload;
      const found = state.sorts.find(s => s.key === k);
      if (!found) state.sorts = [{ key: k, dir: "asc" }];
      else if (found.dir === "asc") found.dir = "desc";
      else state.sorts = [];
    },
    pin(state, action: PayloadAction<string>) {
      if (!state.pinnedIds.includes(action.payload)) state.pinnedIds.push(action.payload);
    },
    unpin(state, action: PayloadAction<string>) {
      state.pinnedIds = state.pinnedIds.filter(id => id !== action.payload);
    }
  }
});

export const { toggleSort, pin, unpin } = slice.actions;
export default slice.reducer;
