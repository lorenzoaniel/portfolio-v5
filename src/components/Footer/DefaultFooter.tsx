import React from "react";
import styled from "styled-components";

const DefaultFooter = () => {
	return (
		<Main>
			<small>&copy; Copyright 2023, Mikhail Lorenzo Aniel</small>
		</Main>
	);
};

const Main = styled.footer`
	width: 100%;
	height: 10rem;

	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.1rem);
`;

export default DefaultFooter;
