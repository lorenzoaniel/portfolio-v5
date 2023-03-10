import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";

const DefaultLoading: React.FC = () => {
	return (
		<Main {...motionPropsDefault} variants={_MotionVariants}>
			Loading...
		</Main>
	);
};

const Main = styled(motion.div)`
	background: var(--palette-color-light);
	height: 100vh;
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);
`;

const _MotionVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 3,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 3,
		},
	},
};

export default DefaultLoading;
