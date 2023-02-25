import React from "react";
import styled from "styled-components";

const Projects: React.FC = () => {
	return (
		<Main>
			<TestComp />
		</Main>
	);
};

const Main = styled.section`
	height: fit-content;
	background: #00ff44;
`;

const TestComp = styled.div`
	height: 100vh;
	background: #0f4354;
`;

export default Projects;
