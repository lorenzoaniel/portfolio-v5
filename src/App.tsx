import styled from "styled-components";
import React, { Suspense, useRef } from "react";

import { GlobalStyle } from "./styles/GlobalStyle";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NavbarDefault from "./components/Navbar/NavbarDefault";
import ParallaxHome from "./components/AnimatedBackground/ParallaxHome";
import { useScroll } from "framer-motion";

const App: React.FC = () => {
	// const ref = useRef(null);
	const { scrollYProgress } = useScroll({ offset: ["start end", "end end"] });

	//RENDER
	return (
		<>
			<GlobalStyle />
			<Main id={"App"}>
				<ParallaxHome scrollY={scrollYProgress} />
				<NavbarDefault />
				<Suspense fallback={<div>Loading...</div>}>
					<Home />
					<Projects />
					<Contact />
				</Suspense>
			</Main>
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
