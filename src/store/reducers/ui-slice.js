import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  greeting: "",
  theme: "light",
}

const uiSlice = createSlice({
  name: "Ui",
  initialState,
  reducers: {
    // sync
    setGreeting: (state, action) => {
      state.greeting = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export default uiSlice.reducer
export const { setGreeting, setTheme, toggleTheme } = uiSlice.actions

// export default React
// export { useState, useCallback }
// import glbReducer from "glb-slice"
// import { fetchUser } from "glb-slice"
