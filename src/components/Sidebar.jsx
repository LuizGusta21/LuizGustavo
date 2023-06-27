import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/eu.jpeg'
import Avatarr from '../img/eu3.jpeg'
import Curriculo from '../img/curriculo.pdf'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <section id='sidebar'>
      <img src={Avatarr} alt="Luiz Gustavo" />
      <p className='name'>Luiz Gustavo.</p>
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a value="arroba" href={Curriculo} download="Curriculo (Luiz Gustavo)" name="aleatorio" className="btn">Download Currículo</a>

    </section>
  )
}

export default Sidebar