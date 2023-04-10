import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import FloatingCrystalHeading from "../../components/Heading/FloatingCrystalHeading";
import ProjectContent from "../../components/Content/ProjectContent";
import { useAppSelector } from "../../redux/hooks";
import { selectPagesInfo } from "../../redux/features/pagesInfoSlice";

const Projects: React.FC = () => {
	const projectsContext = useAppSelector(selectPagesInfo).Projects;

	return (
		<Main id={"projects"}>
			<Header>
				<FloatingCrystalHeading title={"Projects"} />
			</Header>
			<Content>
				<ProjectContent
					title={projectsContext.projects.capturestudiodemo.title}
					imgSrc={projectsContext.projects.capturestudiodemo.imgSrc}
					desc={projectsContext.projects.capturestudiodemo.desc}
					github={projectsContext.projects.capturestudiodemo.github}
					link={projectsContext.projects.capturestudiodemo.link}
				/>
				<ProjectContent
					title={projectsContext.projects.portfolioV4.title}
					imgSrc={projectsContext.projects.portfolioV4.imgSrc}
					desc={projectsContext.projects.portfolioV4.desc}
					github={projectsContext.projects.portfolioV4.github}
					link={projectsContext.projects.portfolioV4.link}
				/>
				<ProjectContent
					title={projectsContext.projects.notesApp.title}
					imgSrc={projectsContext.projects.notesApp.imgSrc}
					desc={projectsContext.projects.notesApp.desc}
					github={projectsContext.projects.notesApp.github}
					link={projectsContext.projects.notesApp.link}
				/>
				<ProjectContent
					title={projectsContext.projects.weatherApp.title}
					imgSrc={projectsContext.projects.weatherApp.imgSrc}
					desc={projectsContext.projects.weatherApp.desc}
					github={projectsContext.projects.weatherApp.github}
					link={projectsContext.projects.weatherApp.link}
				/>
			</Content>
		</Main>
	);
};

const Main = styled(motion.section)`
	/* border: 0.1rem solid blue; */
	height: fit-content;
	background: transparent;
	display: flex;
	flex-direction: column;
	padding: 15vmin 8vmin;
	row-gap: 10vmin;
`;

const Header = styled(motion.div)`
	display: flex;
	justify-content: center;
`;

const Content = styled(motion.div)`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;

	gap: 5vmin;
`;

export default Projects;
