import "./Navbar.css";
import { NavLink } from "react-router-dom";
import foto from "../../assets/foto4.png";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="logo">
          <img src={foto} alt="" className="logo__imagem" />
          <span className="logo__sub">Luiz Gustavo</span>
        </div>
        <div className="navbar">
          <ul className="navbar__lista">
            <li className="navbar__item">
              <a className="link" href="#">
                home
              </a>
            </li>
            <li className="navbar__item">
              <a className="link" href="#sobre">
                sobre
              </a>
            </li>
            <li className="navbar__item">
              <a className="link" href="#projetos">
                projetos
              </a>
            </li>
            <li className="navbar__item">
              <a className="link" href="#contato">
                contato
              </a>
            </li>
          </ul>
        </div>

        {/* responsivo */}
        <div className="icons">
          {!isOpen && <RiMenu2Fill className="icon" onClick={toggleMenu} />}
          {isOpen && <RiCloseFill className="icon" onClick={toggleMenu} />}
        </div>
      </div>
      <div className="navbar_mobile">
        <ul className={isOpen ? "menu-list open" : "menu-list"}>
          <li className="navbar_item_mobile">
            <a onClick={closeMenu} className="link" href="#">
              home
            </a>
          </li>
          <li className="navbar_item_mobile">
            <a onClick={closeMenu} className="link" href="#sobre">
              sobre
            </a>
          </li>
          <li className="navbar_item_mobile">
            <a onClick={closeMenu} className="link" href="#projetos">
              projetos
            </a>
          </li>
          <li className="navbar_item_mobile">
            <a onClick={closeMenu} className="link" href="#contato">
              contato
            </a>
          </li>
        </ul>
      </div>
      {/* responsivo */}
    </header>
  );
}
