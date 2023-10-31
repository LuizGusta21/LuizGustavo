import "./Contatos.css";

import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Contatos() {
  const socialNetworks = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/luizgusta21/",
      icon: <FaLinkedinIn />,
      color: "#0e76a8",
    },
    {
      name: "github",
      link: "https://github.com/LuizGusta21",
      icon: <FaGithub />,
      color: "#171515",
    },
    {
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=5577988522951&text&type=phone_number&app_absent=0",
      icon: <FaWhatsapp />,
      color: "#25D366",
    },
  ];

  return (
    <>
      <div className="social-networks">
        {socialNetworks.map((network) => (
          <a
            key={network.name}
            href={network.link}
            target="_blank"
            className="social-btn"
            id={network.name}
            style={{ color: network.color }}
          >
            {network.icon}
          </a>
        ))}
      </div>
    </>
  );
}
