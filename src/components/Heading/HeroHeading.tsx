import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";
import { GiStrikingDiamonds } from "react-icons/gi";

interface Props {
	title: string;
}

const HeroHeading: React.FC<Props> = ({ title }) => {
	return (
		<Main {...motionPropsDefault}>
			<IcongroupMain>
				<IconLeftMain>
					<GiStrikingDiamonds style={iconStyle} />
				</IconLeftMain>
				<IconRightMain>
					<GiStrikingDiamonds style={iconStyle} />
				</IconRightMain>
			</IcongroupMain>

			<TitleMain>{title}</TitleMain>
		</Main>
	);
};

const Main = styled(motion.h1)`
	/* background: red; */
	/* border: 0.1rem solid red; */
	height: clamp(20rem, 50vw + 0.5rem, 70rem); // 70
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
`;

const TitleMain = styled(motion.div)`
	/* border: 0.1rem solid blue; */
	font-size: clamp(1.5rem, 5vw + 0.5rem, 6rem); //1.5rem
	align-self: flex-start;
	margin-top: 3%;
`;

//ICON
const IcongroupMain = styled(motion.div)`
	/* border: 0.1rem solid orange; */

	height: fit-content;
	width: fit-content;
	position: absolute;
	display: flex;
`;

const IconRightMain = styled(motion.div)`
	/* border: 0.1rem solid lightblue; */
	height: clamp(13rem, 45vw + 0.5rem, 60rem); // 18,
	width: clamp(13rem, 45vw + 0.5rem, 60rem);
	transform: rotate(-90deg);
`;

const IconLeftMain = styled(IconRightMain)`
	/* transform: rotate(-100deg); */
	transform: scaleY(-1) rotate(90deg);
`;

const iconStyle = {
	height: "100%",
	width: "100%",
	fill: "var(--palette-color-medium)",
	filter: "drop-shadow(0rem 0rem 1rem var(--palette-color-darkest))",
};

export default HeroHeading;
