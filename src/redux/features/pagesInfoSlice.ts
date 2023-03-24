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
				title: "NotesApp MERN",
				github: "https://github.com/lorenzoaniel/notesapp",
				imgSrc: "/assets/images/static/notesappimg.png",
				link: "https://animated-melba-f0cb96.netlify.app",
				desc: "An app that lets the user signup/login and perform CRUD operations on simple notes. (Language: Typescript) (Front-end: ReactJS, Framer-Motion, Styled-Components, React-Router, Radix UI for web compliance, RTK (Redux Tool Kit), Yup (form validation)) (Backend: Express, Mongoose(MongoDB manipulation), bcrypt(password hash), envalid/dotenv(env validation), http-errors(http error handling), morgan(dev logging)) (Database: MongoDB) (Cloud Infrastructure: Render (Backend), Netlify (Front-end), Atlas(MongoDB))",
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
