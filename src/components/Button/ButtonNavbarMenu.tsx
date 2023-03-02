import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";
import { navButtonMotionVariant } from "./mixins/motion/navButtonMotionVariant";

import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { navMenuToggle, selectNavmenuToggle } from "../../redux/features/navBarToggleSlice";
import { device } from "../../styles/breakpoints";

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

	@media ${device.desktop} {
		min-width: clamp(4.5rem, 10vw, 20rem);
	}
`;

const ArrowStyle = {
	height: "100%",
	width: "100%",
	fill: "var(--palette-color-darkest)",
	filter: "drop-shadow(0 0.1rem 0.5rem var(--palette-color-dark)",
};

export default ButtonNavbarLogo;
