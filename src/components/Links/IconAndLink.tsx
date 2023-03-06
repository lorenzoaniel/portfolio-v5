import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
	children: React.ReactElement | React.ReactElement[];
	data: string;
	href: string;
}

const IconAndLink: React.FC<Props> = ({ data, href, children }) => {
	return (
		<Main>
			<Icon>{children}</Icon>
			<Link href={href} target={"_blank"}>
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

export default IconAndLink;
