import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { GiCrystalGrowth } from "react-icons/gi";
import { homeContext } from "../../pages/Home/Home";

interface Props {
	data: string;
	isLeft?: boolean; //variant to determine which side component will reside
}

const HomeCrystalContent: React.FC<Props> = ({ data, isLeft = true }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["100vh start", "0vh end"], //animation  starts when bot of viewport(vp) touches top of target and ends when top of vp touches bottom of target
	});
	// let scrollY: MotionValue<number> = useContext(homeContext).scrollY;
	const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 0]);

	//ContentIcons
	const widthContent = useTransform(scrollYProgress, [0, 0.6, 1], ["0%", "100%", "0%"]);
	let contentParallaxStyle = {
		width: widthContent,
	};

	//Data
	let dataParallaxStyle = {
		opacity: opacity,
	};

	//Crystal
	const widthCrystal = useTransform(scrollYProgress, [0, 0.6, 1], ["10vmin", "45vmin", "0vmin"]);
	let crystalParallaxStyle = {
		width: widthCrystal,
	};

	return (
		//Each variant is paired with a crystal that grows with it
		<Main ref={ref}>
			<Content isLeft={isLeft}>
				<>
					<Crystal isLeft={isLeft} style={crystalParallaxStyle}>
						<GiCrystalGrowth style={iconStyle(isLeft)} />
					</Crystal>

					<Icon style={contentParallaxStyle}>
						<Data isLeft={isLeft} style={dataParallaxStyle}>
							{data}
						</Data>
					</Icon>
				</>
			</Content>
		</Main>
	);
};

const Main = styled(motion.article)`
	height: fit-content;
	width: 100%;
	display: flex;
	overflow: hidden;
	padding: 5vmin 0;
`;

const Content = styled.div<Content>`
	height: fit-content;
	width: 100%;
	display: flex;
	justify-content: ${(p) => (p.isLeft ? "flex-start" : "flex-end")};
	align-items: center;
	padding: 0vmin 11vmin;
`;

//CRYSTAL GROUP
interface Crystal {
	isLeft: boolean;
}

const Crystal = styled(motion.div)<Crystal>`
	position: absolute;
	${(p) => (p.isLeft ? "left: -1vmin" : "right: -1vmin")};
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
//CRYSTAL GROUP

//CONTENT GROUP
interface Content {
	isLeft: boolean;
}

const Icon = styled(motion.div)`
	height: 95%;
	padding: 3vmin 10vmin;
	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);
	justify-self: flex-end;
	display: flex;
	justify-content: center;
	transform: skew(20deg);
`;

interface Data {
	isLeft: boolean;
}

const Data = styled(motion.h2)<Data>`
	font-size: var(--default-font-h2-size);
	word-break: normal;
	height: fit-content;
	width: 23rem;
	transform: skew(-20deg);
	display: flex;
	padding: 0 ${(p) => (p.isLeft ? "60vmin" : "0vmin")};
	/* justify-content: flex-; */
	align-items: center;
	text-align: center;
`;
//CONTENT GROUP

export default HomeCrystalContent;
