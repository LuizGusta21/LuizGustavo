import { useState } from "react";
import "./SocialMedia.css";

import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {
  const [cor, setCor] = useState(null);

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
      {socialNetworks.map((network) => (
        <a
          key={network.name}
          href={network.link}
          target="_blank"
          className="redes-sociais"
          id={network.name}
          style={{ color: cor === network.name ? network.color : "#FFF" }}
          onMouseOver={() => setCor(network.name)}
          onMouseLeave={() => setCor(null)}
        >
          {network.icon}
        </a>
      ))}
    </>
  );
}
