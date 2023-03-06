import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

//STATIC DATA ONLY
interface infoState {
	Home: any;
}

const initialState = {
	Home: {
		Hero: "Hi my name is Lorenzo, feel free to explore around!",
		Role: "Front-End Developer",
		AboutMe: {
			title: "About Me...",
			linkedin: {
				title: "LinkedIn",
				href: "https://www.linkedin.com/in/mikhail-lorenzo-aniel-283022127/",
			},
			github: {
				title: "Github",
				href: "https://github.com/lorenzoaniel",
			},
			credly: {
				title: "Credly",
				href: "https://www.credly.com/users/mikhail-lorenzo-aniel/badges",
			},
		},
	},
} as infoState;

export const pagesInfoSlice = createSlice({
	name: "pagesInfoSlice",
	initialState,
	reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
export const selectPagesInfo = (state: RootState) => state.pagesInfoSlice;

export default pagesInfoSlice.reducer;
