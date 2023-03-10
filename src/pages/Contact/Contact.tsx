import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import DefaultForm from "../../components/Form/DefaultForm";
import FloatingCrystalHeading from "../../components/Heading/FloatingCrystalHeading";
import DefaultFooter from "../../components/Footer/DefaultFooter";

const Contact: React.FC = () => {
	return (
		<Main id={"contact"}>
			<FloatingCrystalHeading title={"Contact Me"} />
			<DefaultForm />
			<DefaultFooter />
		</Main>
	);
};

const Main = styled(motion.section)`
	height: fit-content;
	background: transparent;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 3vmin;
	padding: 1.5vmin;
`;

export default Contact;
