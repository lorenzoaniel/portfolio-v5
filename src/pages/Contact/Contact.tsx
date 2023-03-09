import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import DefaultForm from "../../components/Form/DefaultForm";
import FloatingCrystalHeading from "../../components/Heading/FloatingCrystalHeading";

const Contact: React.FC = () => {
	return (
		<Main id={"contact"}>
			<FloatingCrystalHeading title={"Contact Me"} />
			<DefaultForm />
		</Main>
	);
};

const Main = styled(motion.section)`
	border: 0.1rem solid blue;

	height: fit-content;
	background: transparent;
	/* background: var(--palette-color-light); */
	z-index: 1;
	display: flex;
	flex-direction: column;
`;

export default Contact;
