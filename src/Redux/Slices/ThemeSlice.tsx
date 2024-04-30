import { createSlice } from "@reduxjs/toolkit";
interface ThemeValue {
  theme: boolean;
}
const initialTheme = localStorage.getItem("theme") === "true";

const initialState: ThemeValue = {
  theme: initialTheme,
};
const ThemeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    setTheme: (state) => {
      state.theme = !state.theme;
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },

    initializeTheme: (state) => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        state.theme = JSON.parse(storedTheme);
      }
    },
  },
});

export const { setTheme, initializeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
