import AboutContainer from './AboutContainer'
import TechContainer from './TechContainer'


import '../styles/components/maincontent.sass'
import ProjectsContainer from './ProjectsContainer'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TechContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent