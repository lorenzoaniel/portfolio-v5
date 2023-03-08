import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";

interface Props {
	href: string;
	title: string;
}

const ButtonGitHub: React.FC<Props> = ({ href, title }) => {
	return (
		<Main
			// key={variantKeyRef.current}
			{...motionPropsDefault}
			variants={_MotionVariants.Main}
		>
			<Title href={href} target={"_blank"}>
				{title}
			</Title>
		</Main>
	);
};

const Main = styled(motion.button)`
	height: fit-content;
	width: fit-content;
	padding: 0.5vmin;
	border: none;
	background: transparent;
`;

const Title = styled(motion.a)`
	font-size: clamp(3rem, 50%, 5rem);
	font-weight: 900;
	text-decoration: none;
`;

const _MotionVariants = {
	Main: {
		whileHover: {
			boxShadow: " 0 0 0.5rem 0.2rem var(--palette-color-medium)",
			backdropFilter: "blur(0.1rem)",
			scale: 1.2,
		},
		whileTap: {
			scale: 1,
			transition: {
				delay: 0.1,
			},
		},
	},
};

export default ButtonGitHub;
