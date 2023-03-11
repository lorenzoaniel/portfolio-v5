import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

//STATIC DATA ONLY
interface infoState {
	Home: any;
	Projects: any;
}

const initialState = {
	Home: {
		Hero: "Hi my name is Lorenzo, feel free to explore around!",
		Role: "Front-End Developer",
		AboutMe: {
			title: "About Me",
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
	Projects: {
		title: "Projects",
		projects: {
			portfolioV4: {
				title: "PortfolioV4",
				github: "https://github.com/lorenzoaniel/portfolio-v4",
				imgSrc: "/assets/images/static/portfoliov4img.png",
				link: "http://mikhaillorenzoaniel.surge.sh/",
				desc: "Fourth version of my portfolio that houses six other learning projects as well as other versions of previous portfolios, decided to make a 5th version since version 4 does not run too well on mobile due to the numerous animations",
			},
			socialMediaAppDemo: {
				title: "Social Media App",
				github: "",
				imgSrc: "/assets/images/static/comingsoonimg.jpg",
				link: "",
				desc: "Currently in the works, a fullstack social media app with built in Authorization and working MongoDB backend",
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
