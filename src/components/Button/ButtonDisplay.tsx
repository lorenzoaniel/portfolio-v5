import React from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";

interface Props {
	href: string;
	title: string;
}

const ButtonDisplay: React.FC<Props> = ({ href, title }) => {
	return (
		<Main {...motionPropsDefault} variants={_MotionVariants().Main}>
			<a href={href} target={"_blank"} style={{ textDecoration: "none" }}>
				{title}
			</a>
		</Main>
	);
};

const Main = styled(motion.button)`
	position: absolute;
	background: transparent;

	border: none;
	height: fit-content;
	width: 15rem;

	font-size: 2rem;
	font-weight: 700;
	padding: 1vmin;

	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const _MotionVariants = () => {
	return {
		Main: {
			initial: {
				opacity: 0.5,
			},
			animate: {},
			whileHover: {
				opacity: 1,
				scale: 1.2,

				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			},
			whileTap: {},
		},
	};
};

export default ButtonDisplay;
