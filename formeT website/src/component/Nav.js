import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../images/logo-2.png";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <NavWrapper show={show ? "true" : "false"}>
      <Logo>
        <Link to={`/`}>
          <img src={logoImage} alt="logo" />
        </Link>
      </Logo>
      <Menu>
        <StyledLink to={`/`}>Home</StyledLink>
        <StyledLink to={`/`}>Search</StyledLink>
        <StyledLink to={`/`}>Pick</StyledLink>
      </Menu>
    </NavWrapper>
  );
}
export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(props) =>
    props.show === "true" ? "#101010" : "transparent"};
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 0 5rem;
  z-index: 10;
`;

const Logo = styled.a`
  padding: 0;
  width: 150px;

  img {
    height: 4rem;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem; /* Adjust the spacing between links */
  font-size: 1.3rem;
  transition: color 0.3s;

  &:hover {
    color: #8a2be2;
  }
`;
