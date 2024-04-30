import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";
interface CounterValue {
  value: number;
}
const initialState: CounterValue = {
  value: 0,
};
const CounterSlice = createSlice({
  initialState,
  name: "Counter",
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;
