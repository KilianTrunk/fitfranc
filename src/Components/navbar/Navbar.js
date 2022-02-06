import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

import PinkLogo from "../../Images/Pink Logo.png";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #352f44;
  border-bottom: 2px solid #352f44;
  padding: 0 20px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={PinkLogo} alt="Logo" className="Navbar-Logo" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
