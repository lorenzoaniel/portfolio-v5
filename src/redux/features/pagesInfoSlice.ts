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
			capturestudiodemo: {
				title: "Capture Studio Demo",
				github: "https://github.com/lorenzoaniel/capturestudiodemo",
				imgSrc: "/assets/images/static/capturestudiodemoimg.png",
				link: "https://capturestudiodemo.surge.sh/",
				desc: "A Figma Community Sample Design Photography website. I used Styled-Components/Framer/React-Bootstrap for styling, Formik for forms and React-Scroll for SPA navigation. This is simply a design to functional website project. I added Modals and Forms that were not on the original design as well as some sample videos to give the design some life. Responsive even in mobile.",
			},
			portfolioV4: {
				title: "PortfolioV4",
				github: "https://github.com/lorenzoaniel/portfolio-v4",
				imgSrc: "/assets/images/static/portfoliov4img.png",
				link: "http://mikhaillorenzoaniel.surge.sh/",
				desc: "Fourth version of my portfolio that houses six other learning projects as well as other versions of previous portfolios, decided to make a 5th version since version 4 does not run too well on mobile due to the numerous animations",
			},
			notesApp: {
				title: "NotesApp MERN",
				github: "https://github.com/lorenzoaniel/notesapp",
				imgSrc: "/assets/images/static/notesappimg.png",
				link: "https://animated-melba-f0cb96.netlify.app",
				desc: "An app that lets the user signup/login and perform CRUD operations on simple notes. (Language: Typescript) (Front-end: ReactJS, Framer-Motion, Styled-Components, React-Router, Radix UI for web compliance, RTK (Redux Tool Kit), Yup (form validation)) (Backend: Express, Mongoose(MongoDB manipulation), bcrypt(password hash), envalid/dotenv(env validation), http-errors(http error handling), morgan(dev logging)) (Database: MongoDB) (Cloud Infrastructure: Render (Backend), Netlify (Front-end), Atlas(MongoDB))",
			},
			agecalculatorapp: {
				title: "Age Calculator App",
				github: "https://github.com/lorenzoaniel/age_calculator_app",
				imgSrc: "/assets/images/static/agecalculatorappimg.png",
				link: "https://lorenzoaniel.github.io/age_calculator_app/",
				desc: "An age calculator app design challenge from Front-End Mentor. https://www.frontendmentor.io/profile/lorenzoaniel for more details",
			},
			githubusersearchapp: {
				title: "Github User Search App",
				github: "https://github.com/lorenzoaniel/github-user-search-app",
				imgSrc: "/assets/images/static/githubusersearchappdesktop.png",
				link: "https://github-user-search-app-lorenzoaniel.vercel.app/",
				desc: "A github user search app design challenge from Front-End Mentor. https://www.frontendmentor.io/profile/lorenzoaniel for more details",
			},
			dictionaryapp: {
				title: "Dictionary Search App",
				github: "https://github.com/lorenzoaniel/dictionary-web-app",
				imgSrc: "/assets/images/static/Dictionary_Web_App_Default.png",
				link: "https://dictionary-web-app-lorenzoaniel.vercel.app/",
				desc: "Dictionary app design challenge from Front-End Mentor. https://www.frontendmentor.io/profile/lorenzoaniel for more details",
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
