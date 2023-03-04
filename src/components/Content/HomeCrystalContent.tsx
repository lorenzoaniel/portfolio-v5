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
	const width = useTransform(scrollY, [0, 0.5, 1], ["0vmin", "80vmin", "0vmin"]);
	const opacity = useTransform(scrollY, [0, 0.4, 1], [0.7, 1, 0.5]);

	//ContentIcons
	const contentIconCont = useAnimationControls();
	let contentParallaxStyle = {
		width: width,
		// opacity: opacity,
	};

	//Crystal
	const crystalCont = useAnimationControls();
	// let crystalParallaxStyle = {
	// 	scaleX: scaleX,
	// };

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
			{/* <Crystal>
				<GiCrystalGrowth style={iconStyle(isLeft)} />
			</Crystal> */}

			<Content isLeft={isLeft}>
				{isLeft ? (
					<ContentLeft style={contentParallaxStyle}>
						<Data>{data}</Data>
					</ContentLeft>
				) : (
					<ContentRight style={contentParallaxStyle}>
						<Data>{data}</Data>
					</ContentRight>
				)}
			</Content>
		</Main>
	);
};

const Main = styled(motion.main)`
	border: 0.1rem solid red;
	height: fit-content;
	width: 100%;
	display: flex;
`;

const Crystal = styled(motion.div)`
	/* border: 0.1rem solid blue; */
	position: absolute;
	height: 45vmin;
	width: 45vmin;
	z-index: 1;
`;

const iconStyle = (isLeft: boolean) => {
	return {
		height: "inherit",
		width: "inherit",
		fill: "var(--palette-color-medium)",
		filter: "drop-shadow(0rem 0rem 1rem var(--palette-color-darkest))",
		transform: `rotate(${isLeft ? 90 : 180}deg)`,
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
	/* overflow-x: hidden; */
`;

const ContentLeft = styled(motion.div)`
	height: 95%;
	padding: 3vmin 8vmin;
	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);
	justify-self: flex-end;
	display: flex;
	justify-content: flex-end;
	transform: skew(45deg);
`;

const ContentRight = styled(ContentLeft)`
	justify-self: flex-start;
`;

const Data = styled(motion.h2)`
	font-size: var(--default-font-h2-size);
	word-break: normal;
	height: 20rem;
	width: 20rem;
	transform: skew(-45deg);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default HomeCrystalContent;
