import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
	return <Main id={"projects"}></Main>;
};

const Main = styled(motion.section)`
	height: 100rem;
	background: transparent;
`;

export default Projects;
