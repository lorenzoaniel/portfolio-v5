import React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
	return (
		<Main>
			<TestComp />
		</Main>
	);
};

const Main = styled.section`
	height: fit-content;
	background: orange;
`;

const TestComp = styled.div`
	height: 100vh;
	background: lightblue;
`;

export default Home;
