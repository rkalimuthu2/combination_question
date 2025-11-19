import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchUsers = createAsyncThunk("users/fetchUser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
});

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, loading: false, list: [], error: null },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, actions) => {
        state.loading = false;
        state.list = actions.payload;
      })
      .addCase(fetchUsers.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.error.message;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
