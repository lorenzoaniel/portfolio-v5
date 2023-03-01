import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
	return <Main id={"contact"}></Main>;
};

const Main = styled(motion.section)`
	height: 100rem;
	background: transparent;
	/* background: var(--palette-color-light); */
`;

export default Contact;
