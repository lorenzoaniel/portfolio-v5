import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import HeroHeading from "../../components/Heading/HeroHeading";
import HomeCrystalContent from "../../components/Content/HomeCrystalContent";

const Home: React.FC = () => {
	return (
		<Main id={"home"}>
			<HeroHeading title={"Hi, my name is Lorenzo"} />
			<HomeCrystalContent data={"Aspiring Front-end Developer"} />
		</Main>
	);
};

const Main = styled(motion.section)`
	height: fit-content;
	background: transparent;
	padding-top: calc(10vh + 3rem); //takes into account NavbarDefault height and margin

	display: flex;
	flex-direction: column;
	row-gap: 20vmin;
`;

export default Home;
