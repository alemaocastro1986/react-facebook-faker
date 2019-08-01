import React from "react";
import Logo from "../assets/facebook-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <nav className="header">
      <img src={Logo} alt="Fecebook logo" />
      <div className="header-profile">
        <strong>Meu Perfil</strong>
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
    </nav>
  );
}

export default Header;
