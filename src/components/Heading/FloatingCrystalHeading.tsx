import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView, useTransform, useSpring, useMotionValue } from "framer-motion";

import { GiFloatingCrystal } from "react-icons/gi";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";

interface Props {
	title: string;
}

const FloatingCrystalHeading: React.FC<Props> = ({ title }) => {
	let ref = useRef(null);
	let inView = useInView(ref);

	return (
		<Main ref={ref}>
			<Icon animate={inView ? "animate" : "initial"} variants={_MotionVariants.Icon.Left}>
				<GiFloatingCrystal style={iconLeftStyle} />
			</Icon>
			<Content animate={inView ? "animate" : "initial"} variants={_MotionVariants.Content}>
				{title}
			</Content>
			<Icon animate={inView ? "animate" : "initial"} variants={_MotionVariants.Icon.Right}>
				<GiFloatingCrystal style={iconRightStyle} />
			</Icon>
		</Main>
	);
};

//MAIN
const Main = styled(motion.h2)`
	display: flex;
	column-gap: 1.5vmin;
	padding: 5vmin;
	z-index: 1;
`;

//ICON GROUP
const Icon = styled(motion.div)``;

const iconRightStyle = {
	height: "25vmin",
	width: "25vmin",
	fill: "var(--palette-color-darkest)",
	filter: "drop-shadow(0rem 0rem 0.1rem var(--palette-color-darkest))",
	color: "transparent",
};

const iconLeftStyle = {
	height: "25vmin",
	width: "25vmin",
	fill: "var(--palette-color-darkest)",
	filter: "drop-shadow(0rem 0rem 0.1rem var(--palette-color-darkest))",
	color: "transparent",
	transform: "scaleX(-1)",
};

//CONTENT
const Content = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: var(--default-font-h2-size);
`;

//MOTION
const _MotionVariants = {
	Content: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 3,
				ease: "easeInOut",
			},
		},
	},
	Icon: {
		Left: {
			initial: {
				opacity: 0,
				y: -15,
			},
			animate: {
				y: 15,
				transition: {
					type: "spring",
					damping: 0,
					stiffness: 500,
					mass: 100,
				},
			},
		},
		Right: {
			initial: {
				opacity: 0,
				y: -15,
			},
			animate: {
				y: 15,
				transition: {
					type: "spring",
					damping: 0,
					stiffness: 500,
					mass: 150,
				},
			},
		},
	},
};
export default FloatingCrystalHeading;
