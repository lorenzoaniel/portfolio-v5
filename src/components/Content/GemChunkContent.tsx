import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

import { SiCrystal } from "react-icons/si";

interface Props {
	children: React.ReactElement | React.ReactElement[] | string;
	isLeft?: boolean;
}

const GemChunkContent: React.FC<Props> = ({ children, isLeft = true }) => {
	const ref = useRef(null);
	const inView = useInView(ref);

	//GEM
	let gemY = useMotionValue(0);
	gemY = useSpring(gemY, {
		stiffness: 500,
		damping: 5,
		mass: 1,
		duration: 3,
	});

	//CONTENT
	let contentY = useMotionValue(0);
	contentY = useSpring(contentY, {
		stiffness: 400,
		damping: 8,
		mass: 1,
		duration: 3,
	});

	const handleReset = () => {
		contentY.set(-200);
		gemY.set(-200);
	};

	const handleDrop = () => {
		contentY.set(0);
		gemY.set(0);
	};

	useEffect(() => {
		if (inView) {
			handleDrop();
		} else {
			handleReset();
		}
	}, [inView]);

	return (
		<Main ref={ref} isLeft={isLeft}>
			<Gem
				style={{ y: gemY }}
				animate={inView ? _MotionVariants.Gem.animate : _MotionVariants.Gem.initial}
				isLeft={isLeft}
			>
				<SiCrystal style={iconStyle} />
			</Gem>
			<Content
				initial={_MotionVariants.Content.initial}
				animate={inView ? _MotionVariants.Content.animate : _MotionVariants.Content.initial}
				style={{ y: contentY, skew: 20 }}
				isLeft={isLeft}
			>
				<Data>{children}</Data>
			</Content>
		</Main>
	);
};

interface Main {
	isLeft: boolean;
}

const Main = styled(motion.article)<Main>`
	height: fit-content;
	width: 100%;
	margin: 10vmin 0;
	display: flex;
	justify-content: ${(p) => (p.isLeft ? "flex-start" : "flex-end")};
	align-items: center;
	padding: 1.5vmin 11vmin;
	column-gap: 10vmin;
	overflow: hidden;
`;

//GEM GROUP
interface Gem {
	isLeft: boolean;
}

const Gem = styled(motion.div)<Gem>`
	width: 30%;
	order: ${(p) => (p.isLeft ? 1 : 2)};
`;

const iconStyle = {
	height: "100%",
	width: "100%",
	fill: "var(--palette-color-medium)",
	filter: "drop-shadow(0rem 0rem 1rem var(--palette-color-darkest))",
};
//GEM GROUP

//CONTENT GROUP
interface Content {
	isLeft: boolean;
}

const Content = styled(motion.div)<Content>`
	order: ${(p) => (p.isLeft ? 2 : 1)};
	padding: 5vmin;
	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);
	width: 70%;
`;

const Data = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	transform: skew(-20deg);
	padding: 1.5vmin;
	gap: 2.5vmin;
`;

const _MotionVariants = {
	Gem: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	},
	Content: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	},
};

export default GemChunkContent;
