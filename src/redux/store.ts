import { configureStore } from "@reduxjs/toolkit";
import { navMenuToggleSlice } from "./features/navBarToggleSlice";

export const store = configureStore({
	reducer: {
		navMenuToggleSlice: navMenuToggleSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
