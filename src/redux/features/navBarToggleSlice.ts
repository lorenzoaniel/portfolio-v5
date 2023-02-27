import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface initialState {
	navMenuToggleState: boolean;
}

const initialState: initialState = {
	navMenuToggleState: false,
};

export const navMenuToggleSlice = createSlice({
	name: "navMenuToggleSlice",
	initialState,
	reducers: {
		navMenuToggle: (state) => {
			state.navMenuToggleState = !state.navMenuToggleState;
		},
	},
});

export const { navMenuToggle } = navMenuToggleSlice.actions;

export const selectNavmenuToggle = (state: RootState) =>
	state.navMenuToggleSlice.navMenuToggleState;

export default navMenuToggleSlice.reducer;
