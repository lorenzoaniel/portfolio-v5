import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import {
	MotionValue,
	motion,
	useAnimationControls,
	useInView,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import { GiCrystalGrowth } from "react-icons/gi";
import { homeContext } from "../../pages/Home/Home";
import { appContext } from "../../App";
import { device } from "../../styles/breakpoints";

interface Props {
	data: string;
	isLeft?: boolean;
	// scrollY: MotionValue<number>; , scrollY
}

const HomeCrystalContent: React.FC<Props> = ({ data, isLeft = true }) => {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ["start start", "end end"],
	// });
	let scrollY: MotionValue<number> = useContext(homeContext).scrollY;
	// console.log(scrollY);

	// let currDimension = useContext(appContext).currDimension;
	// const ref = useRef(null);
	// const isInView = useInView(ref, { once: true });

	const opacity = useTransform(scrollY, [0, 0.6, 1], [0, 1, 0]);

	//ContentIcons
	const contentIconCont = useAnimationControls();
	const widthContent = useTransform(scrollY, [0, 0.6, 1], ["20vmin", "90vmin", "0vmin"]);
	let contentParallaxStyle = {
		width: widthContent,
	};

	//Data
	let dataParallaxStyle = {
		opacity: opacity,
	};

	//Crystal
	const crystalCont = useAnimationControls();
	const widthCrystal = useTransform(scrollY, [0, 0.6, 1], ["10vmin", "45vmin", "0vmin"]);
	let crystalParallaxStyle = {
		width: widthCrystal,
	};

	//Place all Seq func here to orchestrate initial pageload
	// const MainLoadSeq = async () => {
	// 	// no await so it can start same time as icons
	// 	await contentIconCont.start({
	// 		opacity: 1,
	// 		skew: 45,
	// 		// transformOrigin: "right",
	// 		width: "80%",
	// 		transition: {
	// 			duration: 1,
	// 		},
	// 	});
	// };

	// useEffect(() => {
	// 	console.log(scrollY);
	// 	// console.log(isInView);
	// 	// MainLoadSeq();
	// }, [scrollY]);
	//ref={ref}

	return (
		<Main>
			<Content isLeft={isLeft}>
				{isLeft ? (
					<>
						<Crystal isLeft={isLeft} style={crystalParallaxStyle}>
							<GiCrystalGrowth style={iconStyle(isLeft)} />
						</Crystal>

						<ContentLeft style={contentParallaxStyle}>
							<Data isLeft={isLeft} style={dataParallaxStyle}>
								{data}
							</Data>
						</ContentLeft>
					</>
				) : (
					<>
						<ContentRight style={contentParallaxStyle}>
							<Data isLeft={isLeft} style={dataParallaxStyle}>
								{data}
							</Data>
						</ContentRight>

						<Crystal isLeft={isLeft} style={crystalParallaxStyle}>
							<GiCrystalGrowth style={iconStyle(isLeft)} />
						</Crystal>
					</>
				)}
			</Content>
		</Main>
	);
};

const Main = styled(motion.main)`
	/* border: 0.1rem solid red; */
	height: fit-content;
	width: 100%;
	display: flex;
	overflow: hidden;
	padding: 5vmin 0;
`;

interface Crystal {
	isLeft: boolean;
}

const Crystal = styled(motion.div)<Crystal>`
	/* border: 0.1rem solid blue; */
	position: absolute;
	${(p) => (p.isLeft ? "left: -1vmin" : "right: -1vmin")};
	/* height: 45vmin;
	width: 45vmin; */
	z-index: 1;
`;

const iconStyle = (isLeft: boolean) => {
	return {
		height: "inherit",
		width: "inherit",
		fill: "var(--palette-color-medium)",
		filter: "drop-shadow(0rem 0rem 1rem var(--palette-color-darkest))",
		transform: `rotate(${isLeft ? 90 : 270}deg)`,
	};
};

interface Content {
	isLeft: boolean;
}

const Content = styled.div<Content>`
	/* border: 0.1rem solid green; */
	/* height: clamp(10rem, fit-content, 30rem); */
	height: fit-content;
	width: 100%;
	display: flex;
	justify-content: ${(p) => (p.isLeft ? "flex-start" : "flex-end")};
	align-items: center;
	/* overflow-x: hidden;
	overflow-y: visible; */
`;

const ContentLeft = styled(motion.div)`
	height: 95%;
	padding: 3vmin 15vmin;
	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);
	justify-self: flex-end;
	display: flex;
	justify-content: flex-end;
	transform: skew(45deg);
`;

const ContentRight = styled(ContentLeft)`
	justify-content: flex-start;
`;

interface Data {
	isLeft: boolean;
}

const Data = styled(motion.h2)<Data>`
	font-size: var(--default-font-h2-size);
	word-break: normal;
	height: fit-content;
	width: 20rem;
	transform: skew(-45deg);
	display: flex;
	padding: 0 ${(p) => (p.isLeft ? "50%" : "0%")};
	justify-content: center;
	justify-content: flex-start;
	align-items: center;
	text-align: center;

	${device.laptop} {
	}
`;

export default HomeCrystalContent;
