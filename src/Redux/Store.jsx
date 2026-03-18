import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./SidebarReducer";

export const store = configureStore({
    reducer: {
        // Add your reducers here
        scroll: scrollReducer
    },
});