import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MotionValue, motion, useTransform } from "framer-motion";
import { createCheckerPattern } from "../../helpers/nonHooks/createCheckerPatter";
import useCurrentDimension from "../../helpers/hooks/useCurrDimension";

interface Props {
	scrollY: MotionValue<number>; //useTransform pairing
}

const ParallaxCheckerPattern: React.FC<Props> = ({ scrollY }) => {
	const [diamonds, setDiamonds] = useState<React.ReactNode[]>();
	// let currWinSize = useCurrentDimension();

	// let percentage = currWinSize.width / currWinSize.height;
	// let offset = percentage > 1 ? 2 - percentage : 1 - percentage;

	// useEffect(() => {
	// 	createDiamonds();
	// }, [currWinSize]);

	const createDiamonds = async (): Promise<void> => {
		const rotate = useTransform(scrollY, [0.1, 1], [0, 360]);
		let tempArray = [];
		const patternObj = await createCheckerPattern("#ParallaxGrid");

		tempArray = patternObj.pattern.map((curr, index) => (
			<Diamond
				key={`diamond-${index}`}
				style={{ gridArea: `${curr}`, rotate: rotate, minWidth: "8vmin" }}
			/>
		));

		setDiamonds(tempArray);
	};

	//PRE REDNER FUNC RUNS
	createDiamonds();

	return <Main id={"ParallaxGrid"}>{diamonds}</Main>;
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

const Diamond = styled(motion.div)`
	position: relative;
	display: inline-block;
	height: 100%;

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 0 0.1em rgba(255, 255, 255, 1);
`;

let _MotionVariants = (variant: string, args: any) => {
	return {
		Main: {
			height: `${args.height}px`,
			width: `${args.width}px`,
		},
	}[variant];
};

export default ParallaxCheckerPattern;
