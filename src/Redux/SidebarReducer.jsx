import { createSlice } from "@reduxjs/toolkit";
const scrollSlice=createSlice({
  name: "scroll",
  initialState: {
    // for understanding the state values:
    // showTop: false → hide ↑ button
	// showBottom: true → show ↓ button
    showTop: false,
    showBottom:true
  },
  reducers: {
    setScrolling: (state, action) => {
      state.showTop = action.payload.showTop;
      state.showBottom = action.payload.showBottom;
    }
  }
});
// then we can use dispatch(setScrolling(...)) in our component to update the state based on scroll position.
export const { setScrolling } = scrollSlice.actions;
export default scrollSlice.reducer;