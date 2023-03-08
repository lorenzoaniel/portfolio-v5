import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";
import DisplayThumbnail from "../Image/DisplayThumbnail";
import ButtonDisplay from "../Button/ButtonDisplay";
import ButtonGitHub from "../Button/ButtonGitHub";

interface Props {
	title: string;
	imgSrc: string;
	desc: string;
	github: string;
	link: string;
}

const ProjectContent: React.FC<Props> = ({ title, imgSrc, desc, link, github }) => {
	const [toggleModel, setToggleModel] = useState(false);
	const [toggleDisplay, setToggleDisplay] = useState(false);

	return (
		<Main
			animate={toggleDisplay ? _MotionVariants.Main.whileHover : _MotionVariants.Main.initial}
			onMouseOver={() => {
				setToggleDisplay(true);
			}}
			onMouseLeave={() => {
				setToggleDisplay(false);
			}}
		>
			<SlideUp
				// {...motionPropsDefault}
				// variants={_MotionVariants.SlideUp}
				animate={
					toggleDisplay ? _MotionVariants.SlideUp.whileHover : _MotionVariants.SlideUp.initial
				}
			>
				<ButtonDisplay href={link} title={"Visit Website"} />
				<DisplayThumbnail source={imgSrc} />
			</SlideUp>
			<Cover>{title}</Cover>
			<SlideDown
				animate={
					toggleDisplay ? _MotionVariants.SlideDown.whileHover : _MotionVariants.SlideDown.initial
				}
			>
				<Proxy
					{...motionPropsDefault}
					variants={_MotionVariants.Proxy}
					onClick={() => {
						setToggleModel(true);
					}}
				>
					{"?"}
				</Proxy>

				<ButtonGitHub href={github} title={"Github"} />
			</SlideDown>
			{toggleModel && (
				<Modal
					onClick={() => {
						setToggleModel(false);
					}}
				>
					<Content>{desc}</Content>
				</Modal>
			)}
		</Main>
	);
};

const Main = styled(motion.article)`
	width: clamp(25rem, 50%, 40rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-items: center;
	/* z-index: 2; */

	margin: 5vmin;
`;

//SLIDEUP
const SlideUp = styled(motion.div)`
	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);

	height: 20rem;
	width: 90%;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

//COVER
const Cover = styled(motion.div)`
	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);

	min-height: 10rem;
	width: 100%;
	z-index: 2;

	display: flex;
	justify-content: center;
	align-items: center;
`;

//SLIDEDOWN GROUP
const SlideDown = styled(motion.div)`
	background: transparent;

	min-height: 10rem;
	width: 90%;
	z-index: 1;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1rem;
	column-gap: 1rem;

	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);
`;

//MODAL GROUP
const Modal = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 9999;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(1rem);

	&:hover {
		cursor: pointer;
	}
`;

const Content = styled(motion.div)`
	background: transparent;
	z-index: 9998;
	height: 60%;
	width: 80%;
	overflow-x: hidden;
	overflow-y: scroll;
	scrollbar-width: thin;
	padding: 1rem;
	font-weight: 700;

	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);

	&:hover {
		cursor: pointer;
	}
`;

const Proxy = styled(motion.div)`
	width: fit-content(10px);
	height: auto;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: clamp(3rem, 50%, 5rem);
	font-weight: 900;

	&:hover {
		cursor: pointer;
	}
`;

export const _MotionVariants = {
	Main: {
		initial: {
			height: "10rem",
		},
		whileHover: {
			height: "40rem",
		},
	},
	Cover: {},
	Proxy: {
		whileHover: {
			scale: 1.2,
			boxShadow: "0 0 0.5rem 0.2rem var(--palette-color-medium)",
			backdropFilter: "blur(0.1rem)",
		},
	},
	SlideUp: {
		initial: {
			opacity: 0,
			transform: "translateY(75%) scaleY(0.5)",
		},
		whileHover: {
			opacity: 1,
			transform: "translateY(0%) scaleY(1)",
		},
	},
	SlideDown: {
		initial: {
			opacity: 0,
			transform: "translateY(-100%)",
		},
		whileHover: {
			opacity: 1,
			transform: "translateY(0%)",
		},
	},
};

export default ProjectContent;
