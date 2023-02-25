import React from "react";
import styled from "styled-components";

const Contact: React.FC = () => {
	return (
		<Main>
			<TestComp />
		</Main>
	);
};

const Main = styled.section`
	height: fit-content;
	background: #005eff;
`;

const TestComp = styled.div`
	height: 100vh;
	background: #071a20;
`;

export default Contact;
