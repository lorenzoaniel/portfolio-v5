import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Main>
				<Home />
				<Projects />
				<Contact />
			</Main>
		</>
	);
};

const Main = styled.section`
	height: fit-content;
	width: inherit;
	background: purple;
`;

export default App;
