import { configureStore } from "@reduxjs/toolkit";
import { navMenuToggleSlice } from "./features/navBarToggleSlice";
import { pagesInfoSlice } from "./features/pagesInfoSlice";

export const store = configureStore({
	reducer: {
		navMenuToggleSlice: navMenuToggleSlice.reducer,
		pagesInfoSlice: pagesInfoSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
