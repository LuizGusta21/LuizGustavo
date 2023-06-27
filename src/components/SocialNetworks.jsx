import { FaGithub, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: "Linkedin", link: "https://www.linkedin.com/in/luizgusta21/", icon: <FaLinkedinIn /> },
  { name: "github", link: "https://github.com/LuizGusta21", icon: <FaGithub /> },
  { name: "Whatsapp", link: "https://api.whatsapp.com/send/?phone=5577988522951&text&type=phone_number&app_absent=0", icon: <FaWhatsapp /> },
]


const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target='_blank' className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks