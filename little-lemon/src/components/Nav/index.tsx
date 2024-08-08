import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <ul>
        <li>
          <img src={logoImg} alt="Little Lemon Logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#menu">Menu</Link>
        </li>
        <li>
          <Link to="/bookings">Reservations</Link>
        </li>
        <li className="orderBtn">
          <Link role="button" to="#">
            Order Online
          </Link>
        </li>
        <li>
          <img className="basketIcon" src={basketImg} alt="Basket" />
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
