import styled from "styled-components";
import React, { Suspense, createContext, lazy } from "react";

import { GlobalStyle } from "./styles/GlobalStyle";

// import Home from "./pages/Home/Home";
// import Projects from "./pages/Projects/Projects";
// import Contact from "./pages/Contact/Contact";
import NavbarDefault from "./components/Navbar/NavbarDefault";
import ParallaxCheckerPattern from "./components/AnimatedBackground/ParallaxCheckerPattern";
import { AnimatePresence, MotionValue, useScroll } from "framer-motion";

export const scrollYContext = createContext(new MotionValue<number>());

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const App: React.FC = () => {
	const { scrollYProgress } = useScroll({ offset: ["start end", "end end"] });

	//RENDER
	return (
		<>
			<GlobalStyle />
			<Suspense fallback={<div>Loading...</div>}>
				<scrollYContext.Provider value={scrollYProgress}>
					<AnimatePresence mode={"wait"}>
						<Main id={"App"}>
							<ParallaxCheckerPattern />
							<NavbarDefault />

							<Home />
							<Projects />
							<Contact />
						</Main>
					</AnimatePresence>
				</scrollYContext.Provider>
			</Suspense>
		</>
	);
};

const Main = styled.section`
	height: fit-content;
	width: 100%;
	background: var(--palette-color-light);
	display: flex;
	flex-direction: column;
	z-index: -99;

	transition: all 0.3s ease;
`;

export default App;
