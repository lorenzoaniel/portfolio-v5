import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
	source: string;
}

const DisplayThumbnail: React.FC<Props> = ({ source }) => {
	return (
		<Main>
			<Img src={source} />
		</Main>
	);
};

const Main = styled(motion.div)`
	width: 100%;
	height: 100%;
`;

const Img = styled(motion.img)`
	width: inherit;
	height: inherit;
	opacity: 0.5;
`;

export default DisplayThumbnail;
