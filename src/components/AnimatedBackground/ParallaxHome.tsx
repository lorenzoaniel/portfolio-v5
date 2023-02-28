import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { createCheckerPattern } from "../../helpers/nonHooks/createCheckerPatter";

const ParallaxHome = () => {
	const [diamonds, setDiamonds] = useState<React.ReactNode[]>([]);

	useEffect(() => {
		createDiamonds();
	}, []);

	createCheckerPattern("#ParallaxHomeGrid");

	const createDiamonds = async () => {
		const patternObj = await createCheckerPattern("#ParallaxHomeGrid");

		const newDiamonds = Array.from({ length: patternObj.pattern.length }, (_, index) => {
			return (
				<Diamond key={`diamond-${index}`} style={{ gridArea: `${patternObj.pattern[index]}` }}>
					<DiamondBaseShape key={`diamondBase-${index}`} />
				</Diamond>
			);
		});

		setDiamonds(newDiamonds);
	};

	return <Main id={"ParallaxHomeGrid"}>{diamonds}</Main>;
};

const Main = styled(motion.div)`
	background: transparent;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: inherit; //covers the whole parent element in this case it is home page 100% does not work on dimensions passed 100vh
	width: 100%;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15vmin, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(15vmin, 1fr));
	overflow: hidden;
`;

/* 
  SHAPES
*/

interface Diamond {}

//Decided to use a wrapper so that I can animate wrapper for movement and BaseShape just for looks
const DiamondBaseShape = styled(motion.div)`
	position: absolute; //centers diamond shape with wrapper
	top: 20%; //centers diamond shape with wrapper
	left: 50%; //centers diamond shape with wrapper
	width: 100%;
	height: 100%;
	background: var(--glass-white-light);
	box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(1rem);
	/* Rotate */
	transform: rotate(-45deg);
	/* Rotate Origin */
	transform-origin: 0 100%;
`;

const Diamond = styled(motion.div)<Diamond>`
	/* background: red; */
	position: relative;
	display: inline-block;
	width: 15vmin;
	height: 15vmin;
`;

export default ParallaxHome;
