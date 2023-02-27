import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";
import { navButtonMotionVariant } from "./mixins/motion/navButtonMotionVariant";

import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { navMenuToggle, selectNavmenuToggle } from "../../redux/features/navBarToggleSlice";

/**
 * Used as the way to toggle navbar from compact to full or vice-versa
 *
 */

const ButtonNavbarLogo: React.FC = () => {
	const dispatch = useAppDispatch();
	const toggleMenu = useAppSelector(selectNavmenuToggle);

	return (
		<Main
			{...motionPropsDefault}
			variants={navButtonMotionVariant}
			onClick={() => dispatch(navMenuToggle())}
		>
			{toggleMenu ? <BiLeftArrow style={ArrowStyle} /> : <BiRightArrow style={ArrowStyle} />}
		</Main>
	);
};

const Main = styled(motion.button)`
	background: transparent;
	height: 100%;
	width: clamp(4.5rem, 10vw, 10rem);
	border: none;
	display: flex;
	justify-content: start;
	align-items: center;
`;

const ArrowStyle = {
	height: "100%",
	width: "100%",
	fill: "var(--glass-white-medium)",
	filter: "drop-shadow(0 0.1rem 0.3rem rgba(255, 255, 255, 0.8))",
};

export default ButtonNavbarLogo;
