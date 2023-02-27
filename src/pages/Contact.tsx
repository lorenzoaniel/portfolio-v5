import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
	return <Main id={"contact"}></Main>;
};

const Main = styled(motion.section)`
	min-height: 100vh;
	background: var(--palette-purple-4);
`;

export default Contact;
