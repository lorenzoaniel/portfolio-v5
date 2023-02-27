import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home: React.FC = () => {
	return <Main id={"home"}></Main>;
};

const Main = styled(motion.section)`
	min-height: 100vh;
	background: var(--palette-purple-1);
	/* padding-top: calc(10vh + 1rem); //takes into account NavbarDefault height and margin */
`;

export default Home;
