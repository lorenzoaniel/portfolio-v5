import React, { createContext } from "react";
import styled from "styled-components";
import { MotionValue, motion } from "framer-motion";

import HeroHeading from "../../components/Heading/HeroHeading";
import HomeCrystalContent from "../../components/Content/HomeCrystalContent";
import GemChunkContent from "../../components/Content/GemChunkContent";

import { FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import { SiStyledcomponents, SiRedux, SiReactrouter, SiTypescript } from "react-icons/si";
import IconAndLink from "../../components/Links/IconAndLink";
import { useAppSelector } from "../../redux/hooks";
import { selectPagesInfo } from "../../redux/features/pagesInfoSlice";

export const homeContext = createContext({
	scrollY: new MotionValue<number>(),
});

const Home: React.FC = () => {
	const homeContext = useAppSelector(selectPagesInfo).Home;

	return (
		<Main id={"home"}>
			<HeroHeading title={homeContext.Hero} />
			<Content>
				<HomeCrystalContent data={homeContext.Role} />
				<GemChunkContent isLeft={false}>
					<>
						<FaReact style={iconStyle} />
						<FiFramer style={iconStyle} />
						<SiStyledcomponents style={iconStyle} />
						<SiRedux style={iconStyle} />
						<SiReactrouter style={iconStyle} />
						<SiTypescript style={iconStyle} />
					</>
				</GemChunkContent>
				<HomeCrystalContent isLeft={false} data={homeContext.AboutMe.title} />
				<GemChunkContent>
					<>
						<IconAndLink
							data={homeContext.AboutMe.linkedin.title}
							href={homeContext.AboutMe.linkedin.href}
						>
							<FaLinkedin style={iconStyle} />
						</IconAndLink>
						<IconAndLink
							data={homeContext.AboutMe.github.title}
							href={homeContext.AboutMe.github.href}
						>
							<FaGithub style={iconStyle} />
						</IconAndLink>
						<IconAndLink
							data={homeContext.AboutMe.credly.title}
							href={homeContext.AboutMe.credly.href}
						>
							<HiBadgeCheck style={iconStyle} />
						</IconAndLink>
					</>
				</GemChunkContent>
			</Content>
		</Main>
	);
};

const Main = styled(motion.section)`
	height: fit-content;
	width: 100%;
	background: transparent;

	display: flex;
	flex-direction: column;
	row-gap: 20vmin;

	overflow-x: hidden;
`;

const Content = styled(motion.div)`
	height: fit-content;
	display: flex;
	flex-direction: column;
	row-gap: 5vmin;
`;

const iconStyle = {
	height: "9vmin",
	width: "9vmin",
	fill: "var(--palette-color-darkest)",
	filter: "drop-shadow(0rem 0rem 0.1rem var(--palette-color-darkest))",
	color: "transparent",
};

export default Home;
