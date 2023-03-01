import styled from "styled-components";
import React, { Suspense, useRef } from "react";

import { GlobalStyle } from "./styles/GlobalStyle";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NavbarDefault from "./components/Navbar/NavbarDefault";
import ParallaxCheckerPattern from "./components/AnimatedBackground/ParallaxCheckerPattern";
import { AnimatePresence, useScroll } from "framer-motion";

const App: React.FC = () => {
	// const ref = useRef(null);
	const { scrollYProgress } = useScroll({ offset: ["start end", "end end"] });

	//RENDER
	return (
		<>
			<GlobalStyle />
			<Suspense fallback={<div>Loading...</div>}>
				<AnimatePresence>
					<Main id={"App"}>
						<ParallaxCheckerPattern scrollY={scrollYProgress} />
						<NavbarDefault />

						<Home />
						<Projects />
						<Contact />
					</Main>
				</AnimatePresence>
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
`;

export default App;
