import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  connected: boolean;
  lastUpdate: number | null;
  lagMs: number;
};

const initial: State = {
  connected: false,
  lastUpdate: null,
  lagMs: 0,
};

const ws = createSlice({
  name: "ws",
  initialState: initial,
  reducers: {
    setConnected(s, a: PayloadAction<boolean>) { s.connected = a.payload; },
    tick(s) {
      const now = Date.now();
      s.lagMs = s.lastUpdate ? now - s.lastUpdate : 0;
      s.lastUpdate = now;
    }
  }
});

export const { setConnected, tick } = ws.actions;
export default ws.reducer;
