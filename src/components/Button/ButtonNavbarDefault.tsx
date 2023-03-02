import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";
import { navButtonMotionVariant } from "./mixins/motion/navButtonMotionVariant";

interface Props {
	children?: React.ReactNode | string;
	destination: string;
}

/**
 * @Params {name} - optional, can be string or React.ReactNode if you are using an icon for example
 * @Params {destination} - used by the scroller to scroll to section make sure this destination is the same as the section id (the section will need an id)
 */

const ButtonNavbarDefault: React.FC<Props> = ({ children, destination }) => {
	return (
		<Main
			{...motionPropsDefault}
			initial={navButtonMotionVariant.initial}
			whileHover={navButtonMotionVariant.whileHover}
			variants={_MotionVariants.Main}
			onClick={() => {
				//opted to have a click handler instead of using Link so that I can separate the styling of this button with the functionality of the scroll
				scroller.scrollTo(destination, {
					duration: 500,
					delay: 100,
					smooth: true,
				});
			}}
		>
			<Text>{children}</Text>
		</Main>
	);
};

//STYLES
const Main = styled(motion.button)`
	height: 100%;
	border: none;
	flex-grow: 1;
`;

const Text = styled(motion.h1)`
	background: var(--palette-color-darkest);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-shadow: 0 0.1rem 0.1rem var(--palette-color-darkest);
	filter: drop-shadow(0 0.1rem 0.1rem var(--palette-color-dark));

	transform: skew(-20deg);

	font-size: var(--default-font-button-size);
`;

const _MotionVariants = {
	Main: {
		toggledOff: {
			width: "clamp(0%, 0%, 0%)",
		},
		toggledOn: {
			width: "clamp(6rem, 20vw, 30rem)",
		},
	},
};

export default ButtonNavbarDefault;
