import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MotionValue, motion, useTransform } from "framer-motion";

import { createCheckerPattern } from "../../helpers/nonHooks/createCheckerPatter";

import useCurrentDimension from "../../helpers/hooks/useCurrDimension";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";
import { scrollYContext } from "../../App";

const ParallaxCheckerPattern: React.FC = () => {
	let scrollY: MotionValue<number> = useContext(scrollYContext);
	const [squares, setSquares] = useState<React.ReactNode[]>();
	const rotate = useTransform(scrollY, [0, 1], [0, 360]);
	let currWinSize = useCurrentDimension();

	//Generating squares
	useEffect(() => {
		createSquares();
	}, [currWinSize]);

	const createSquares = async (): Promise<void> => {
		console.log("run Squares");
		const patternObj = await createCheckerPattern("#ParallaxGrid"); //Intensive if resizing frequently so had to async

		setSquares(
			await patternObj.pattern.map((curr, index) => {
				return (
					<Square
						key={`Square-${index}`}
						style={{ gridArea: `${curr}`, rotate: rotate, minWidth: "8vmin" }} //minWidth is needed so that we dont get some squares with computed width = 0
					/>
				);
			})
		);
	};

	return (
		<Main {...motionPropsDefault} variants={_MotionVariants.Main} id={"ParallaxGrid"}>
			{squares}
		</Main>
	);
};

const Main = styled(motion.div)`
	background: transparent;
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(8vmin, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(8vmin, 1fr));
	justify-content: center;
	align-items: center;
`;

/* 
  SHAPES
*/

const Square = styled(motion.div)`
	position: relative;
	display: inline-block;
	height: 100%;

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 0 0.1em rgba(255, 255, 255, 1);
`;

const _MotionVariants = {
	Main: {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		exit: { opacity: 0 },
	},
	Square: {},
};

export default ParallaxCheckerPattern;
