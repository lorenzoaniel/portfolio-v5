import React, { createContext, useContext, useRef } from "react";
import styled from "styled-components";
import { MotionValue, motion, useScroll } from "framer-motion";
import HeroHeading from "../../components/Heading/HeroHeading";
import HomeCrystalContent from "../../components/Content/HomeCrystalContent";
import { appContext } from "../../App";

export const homeContext = createContext({
	scrollY: new MotionValue<number>(),
});

const Home: React.FC = () => {
	let ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["100vh start", "0vh end"], //animation  starts when bot of viewport(vp) touches top of target and ends when top of vp touches bottom of target
	});
	// let scrollY: MotionValue<number> = useContext(appContext).scrollY;
	//scrollY={scrollY}
	return (
		<Main id={"home"}>
			<HeroHeading title={"Hi, my name is Lorenzo"} />
			<homeContext.Provider value={{ scrollY: scrollYProgress }}>
				<Content ref={ref}>
					<HomeCrystalContent data={"Front-end Developer"} />
					<HomeCrystalContent isLeft={false} data={"About Me"} />
					{/* <HomeCrystalContent data={"Aspiring Front-end Developer"} /> */}
					{/* <HomeCrystalContent data={"Aspiring Front-end Developer"} />
					<HomeCrystalContent data={"Aspiring Front-end Developer"} />
					<HomeCrystalContent data={"Aspiring Front-end Developer"} /> */}
				</Content>
			</homeContext.Provider>
		</Main>
	);
};

const Main = styled(motion.section)`
	/* border: 0.1rem solid blue; */
	height: fit-content;
	background: transparent;
	/* padding-top: calc(10vh + 3rem); //takes into account NavbarDefault height and margin */

	display: flex;
	flex-direction: column;
	row-gap: 20vmin;
	/* justify-content: center; */
`;

const Content = styled(motion.div)`
	/* border: 0.1rem solid orange; */
	height: fit-content;
	display: flex;
	flex-direction: column;
	row-gap: 5vmin;
`;

export default Home;
