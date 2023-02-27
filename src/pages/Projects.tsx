import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
	return <Main id={"projects"}></Main>;
};

const Main = styled(motion.section)`
	min-height: 100vh;
	background: var(--palette-purple-3);
`;

export default Projects;
