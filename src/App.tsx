import styled from "styled-components";
import React, { Suspense } from "react";

import { GlobalStyle } from "./styles/GlobalStyle";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavbarDefault from "./components/Navbar/NavbarDefault";

const App: React.FC = () => {
	//RENDER
	return (
		<>
			<GlobalStyle />
			<Main>
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
	background: purple;
	display: flex;
	flex-direction: column;
`;

export default App;
