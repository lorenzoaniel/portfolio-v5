import React, { useContext } from "react";
import styled from "styled-components";
import { MotionValue, motion, useTransform } from "framer-motion";
import { GiCrystalGrowth } from "react-icons/gi";
import { homeContext } from "../../pages/Home/Home";

interface Props {
	data: string;
	isLeft?: boolean; //variant to determine which side component will reside
}

const HomeCrystalContent: React.FC<Props> = ({ data, isLeft = true }) => {
	let scrollY: MotionValue<number> = useContext(homeContext).scrollY;
	const opacity = useTransform(scrollY, [0, 0.6, 1], [0, 1, 0]);

	//ContentIcons
	const widthContent = useTransform(scrollY, [0, 0.6, 1], ["20vmin", "90vmin", "0vmin"]);
	let contentParallaxStyle = {
		width: widthContent,
	};

	//Data
	let dataParallaxStyle = {
		opacity: opacity,
	};

	//Crystal
	const widthCrystal = useTransform(scrollY, [0, 0.6, 1], ["10vmin", "45vmin", "0vmin"]);
	let crystalParallaxStyle = {
		width: widthCrystal,
	};

	return (
		//Each variant is paired with a crystal that grows with it
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
`;
//CONTENT GROUP

export default HomeCrystalContent;
