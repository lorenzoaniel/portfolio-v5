import styled from "styled-components";
import React, { Suspense, createContext, lazy, useEffect } from "react";

import { GlobalStyle } from "./styles/GlobalStyle";

import NavbarDefault from "./components/Navbar/NavbarDefault";
import ParallaxCheckerPattern from "./components/AnimatedBackground/ParallaxCheckerPattern";
import { AnimatePresence, MotionValue, useScroll } from "framer-motion";
import useCurrentDimension from "./helpers/hooks/useCurrDimension";
import DefaultLoading from "./components/Loading/DefaultLoading";

export const appContext = createContext({
	scrollY: new MotionValue<number>(),
	currDimension: { height: 0, width: 0 },
});

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const App: React.FC = () => {
	const currDimension = useCurrentDimension();
	const { scrollYProgress } = useScroll();

	useEffect(() => {}, [currDimension]);

	//RENDER
	return (
		<>
			<GlobalStyle />
			<AnimatePresence mode={"wait"}>
				<Suspense fallback={<DefaultLoading />}>
					<appContext.Provider value={{ scrollY: scrollYProgress, currDimension }}>
						<Main id={"App"}>
							<ParallaxCheckerPattern />
							<NavbarDefault />

							<Home />
							<Projects />
							<Contact />
						</Main>
					</appContext.Provider>
				</Suspense>
			</AnimatePresence>
		</>
	);
};

const Main = styled.main`
	height: fit-content;
	width: 100%;
	background: var(--palette-color-light);
	display: flex;
	flex-direction: column;
	z-index: -99;

	transition: all 0.3s ease;
`;

export default App;
