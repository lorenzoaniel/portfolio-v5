import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimationControls, useScroll, useSpring, useTransform } from "framer-motion";
import { GiStrikingDiamonds } from "react-icons/gi";

interface Props {
	title: string;
}

const HeroHeading: React.FC<Props> = ({ title }) => {
	let { scrollY } = useScroll();
	const opacity = useSpring(useTransform(scrollY, [0, 1000], [1, 0]));

	//TitleMain
	const titleMainCont = useAnimationControls();
	const yTitleMain = useSpring(useTransform(scrollY, [0, 1], [0.5, 0], { clamp: false }));
	let titleMainParallaxStyle = {
		y: yTitleMain,
		opacity: opacity,
	};

	//Icons
	const IconsOnPageLoadCont = useAnimationControls();
	const yIcons = useSpring(useTransform(scrollY, [0, 1], [0, 0.25], { clamp: false }));
	const rotateLeftIcons = useSpring(useTransform(scrollY, [0, 1000], [0, -45]));
	const rotateRightIcons = useSpring(useTransform(scrollY, [0, 1000], [0, 45]));
	let IconsParallaxStyle = {
		Left: {
			y: yIcons,
			opacity: opacity,
			rotate: rotateLeftIcons,
		},
		Right: {
			y: yIcons,
			opacity: opacity,
			rotate: rotateRightIcons,
		},
	};

	//Place all Seq func here to orchestrate initial pageload
	const MainLoadSeq = async () => {
		// no await so it can start same time as icons
		titleMainCont.start({
			y: 0,
			opacity: 1,
		});

		await IconsOnPageLoadCont.start({
			y: 0,
			rotate: 0,
			opacity: 1,
		});
	};

	useEffect(() => {
		MainLoadSeq();
	}, []);

	return (
		<Main
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			}}
		>
			<IcongroupMain>
				<IconLeftMain
					initial={{
						opacity: 0,
						y: 200,
						rotate: -90,
					}}
					animate={IconsOnPageLoadCont}
					style={IconsParallaxStyle.Left}
				>
					<GiStrikingDiamonds style={{ ...iconStyle, transform: "scaleY(-1) rotate(90deg)" }} />
				</IconLeftMain>
				<IconRightMain
					initial={{
						opacity: 0,
						y: 200,
						rotate: 90,
					}}
					animate={IconsOnPageLoadCont}
					style={IconsParallaxStyle.Right}
				>
					<GiStrikingDiamonds style={{ ...iconStyle, transform: "rotate(-90deg)" }} />
				</IconRightMain>
			</IcongroupMain>

			<TitleMain
				initial={{
					y: -200,
					opacity: 0,
				}}
				animate={titleMainCont}
				style={titleMainParallaxStyle}
			>
				{title}
			</TitleMain>
		</Main>
	);
};

//HEROMAINCONTAINER
const Main = styled(motion.h1)`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	/* transition: all 0.3 ease-in-out; */
`;

//TITLE
const TitleMain = styled(motion.div)`
	font-size: clamp(1.5rem, 5vw + 0.5rem, 6rem);
	text-align: center;
	align-self: flex-start;
	margin: auto 0;
	text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 1);
`;

//ICON
const IcongroupMain = styled(motion.div)`
	height: fit-content;
	width: fit-content;
	position: absolute;
	display: flex;
`;

const IconRightMain = styled(motion.div)`
	height: clamp(13rem, 45vw + 0.5rem, 60rem);
	width: clamp(13rem, 45vw + 0.5rem, 60rem);
`;

const IconLeftMain = styled(IconRightMain)``;

const iconStyle = {
	height: "100%",
	width: "100%",
	fill: "var(--palette-color-medium)",
	filter: "drop-shadow(0rem 0rem 1rem var(--palette-color-darkest))",
};

export default HeroHeading;
