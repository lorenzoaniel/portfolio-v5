import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";

interface Props {
	children: React.ReactElement | React.ReactElement[];
	data: string;
	href: string;
}

const IconAndLink: React.FC<Props> = ({ data, href, children }) => {
	const [hoverToggle, setHoverToggle] = useState(false);

	return (
		<Main
			onMouseOver={() => {
				setHoverToggle(true);
			}}
			onMouseLeave={() => {
				setHoverToggle(false);
			}}
			// {...motionPropsDefault}
		>
			<Icon>{children}</Icon>
			<Link
				{...motionPropsDefault}
				animate={hoverToggle ? "whileHover" : "initial"}
				variants={_MotionVariants.Link}
				href={href}
				target={"_blank"}
			>
				{data}
			</Link>
		</Main>
	);
};

const Main = styled(motion.article)`
	height: fit-content;
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5vmin;
	column-gap: 1vmin;
`;

const Icon = styled(motion.div)`
	height: fit-content;
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Link = styled(motion.a)`
	text-decoration: none;
`;

const _MotionVariants = {
	Link: {
		initial: {
			scale: 1,
		},
		whileHover: {
			scale: 1.2,
			transition: {
				// duration: 0.3,
				ease: "easeInOut",
			},
		},
		whileTap: {
			scale: 1,
		},
	},
};

export default IconAndLink;
