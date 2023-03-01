import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useAppSelector } from "../../redux/hooks";
import { selectNavmenuToggle } from "../../redux/features/navBarToggleSlice";

import { device } from "../../styles/breakpoints";

import ButtonNavbarDefault from "../Button/ButtonNavbarDefault";
import ButtonNavbarMenu from "../Button/ButtonNavbarMenu";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";

/**
 * Navbar, not a reusable component for this SPA, will permanently stay fixed and follow
 * user to whichever section currently scrolled to.
 */

const NavbarDefault: React.FC = () => {
	const toggleMenu = useAppSelector(selectNavmenuToggle);

	return (
		<Main
			{...motionPropsDefault}
			variants={_MotionVariants.Main}
			animate={toggleMenu ? "toggledOn" : "toggledOff"}
		>
			<ButtonNavbarMenu />

			{toggleMenu && (
				<Navbar variants={_MotionVariants.Navbar} style={{}}>
					<ButtonNavbarDefault destination={"home"}>Home</ButtonNavbarDefault>
					<ButtonNavbarDefault destination={"projects"}>Projects</ButtonNavbarDefault>
					<ButtonNavbarDefault destination={"contact"}>Contact</ButtonNavbarDefault>
				</Navbar>
			)}
		</Main>
	);
};

const Main = styled(motion.nav)`
	//keeps navbar at the top of viewport and in-front of everything, height is limited incase users decide to test minimizing app, this will prevent breaking
	position: fixed;
	top: 0;
	left: 0;
	width: 90%;
	z-index: 9999;
	height: clamp(7rem, 10vh, 10vh);

	display: flex;
	padding: 0 2.5%; //adds to the staggered look creating layers
	align-items: center;
	justify-content: center;

	background: transparent;
	box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(1rem);

	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	transform: skew(20deg);

	@media ${device.laptop} {
		width: 70%;
	}
`;

const Navbar = styled(motion.div)`
	display: flex;
	height: 100%;
	column-gap: 4vw;
	padding: 0 3%; //adds to the staggered look creating layers
	align-items: center;
	justify-content: space-around;
	width: fit-content;

	background: var(--glass-white-light);
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const _MotionVariants = {
	Main: {
		toggledOff: {
			margin: "1rem 0% 90vh 5%",
			width: "clamp(5rem, 15vw, 20rem)",
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		toggledOn: {
			margin: "1rem auto 90vh auto",
			width: "clamp(90%, 90%, 90%)",
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	},
	Navbar: {
		toggledOff: {
			opacity: 0,
			width: "0%",
			transition: {
				duration: 0.3,
				ease: "easeInOut",
				when: "afterChildren",
			},
		},
		toggledOn: {
			opacity: 1,
			width: "100%",
			transition: {
				duration: 0.3,
				ease: "easeInOut",
				when: "beforeChildren",
			},
		},
	},
};

export default NavbarDefault;
