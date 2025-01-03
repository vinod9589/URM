import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {}

const initialState: CounterState = {};

const getUsers = createAsyncThunk("user", async () => {});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder;
  },
});

export default userSlice.reducer;
