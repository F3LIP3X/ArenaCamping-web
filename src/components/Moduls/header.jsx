import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

//Logo


const StyledHeader = styled.header`
  background-color: #011f1ac9;
  width: 100%;
  padding: 15px 12px 8px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    flex: 1;
    .nav-logo-link {
      text-decoration: none;
      font-size: 2.8vw;
      text-shadow: 3px 2px 4px rgb(45, 248, 181);
      color: white;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 1.7em;
    cursor: pointer;
  }

  .contHead{
  display: flex;
  justify-content: space-between;
  align-items: center;
  }


  @media screen and (max-width: 918px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .menuToggleBtn {
      display: block;
    }

    .contHead .nav_logo .nav-logo-link {
      font-size: 10vw; 
    }

  }
  
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background: #2b3831;
      border-radius: 0.3em;
      text-align: center;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
    text-align: center;
  }
  @media screen and (max-width: 912px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    font-size = 1em ;
    width: 100%;
    margin-top: 5px;
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <div>
      <StyledHeader>
        <div className="contHead">
          <div className="nav_logo">
            <Link to={"/"} className="nav-logo-link" lang="en">
              ARENA CAMPING
            </Link>
          </div>
          <div>
            <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
          </div>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <Link to={"/Inicio"} className="nav-menu-list">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/Servicios"} className="nav-menu-list">
              Services
            </Link>
          </li>
          <li>
            <Link to={"/Actividades"} className="nav-menu-list">
              Activities
            </Link>
          </li>
          <li>
            <Link to={"/Entorno"} className="nav-menu-list">
              Around
            </Link>
          </li>
          <li>
            <Link to={"/Contacto"} className="nav-menu-list">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/Precios"} className="nav-menu-list">
              Prices
            </Link>
          </li>
          <li>
            <Link to={"/Localización"} className="nav-menu-list">
              Location
            </Link>
          </li>
          <li>
            <Link to={"/Reserva"} className="nav-menu-list">
              Booking
            </Link>
          </li>
        </NavManu>
      </StyledHeader>
    </div>
  );
};

export default Header;
