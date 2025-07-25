// import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constant'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        {/* <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'GAMES' ?
            <ToggleButton active value="GAMES" onClick={() => setToggle('GAMES')}>GAMES</ToggleButton>
            :
            <ToggleButton value="GAMES" onClick={() => setToggle('GAMES')}>GAMES</ToggleButton>
          }
          <Divider />
          {toggle === 'AI/ML' ?
            <ToggleButton active value="AI/ML" onClick={() => setToggle('AI/ML')}>AI/ML</ToggleButton>
            :
            <ToggleButton value="AI/ML" onClick={() => setToggle('AI/ML')}>AI/ML</ToggleButton>
          }
          <Divider />
          {toggle === 'WEB EXTENSIONS' ?
            <ToggleButton active value="WEB EXTENSIONS" onClick={() => setToggle('WEB EXTENSIONS')}>WEB EXTENSIONS</ToggleButton>
            :
            <ToggleButton value="WEB EXTENSIONS" onClick={() => setToggle('WEB EXTENSIONS')}>WEB EXTENSIONS</ToggleButton>
          }
        </ToggleButtonGroup> */}
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
