import { colors } from "@/config/colors";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const OutterSection = styled.nav`
  background-color: ${colors.mainWhite};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InnerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const NavItems = styled.div`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 70px;
    right: 0;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 200px;
    padding: 1rem;
    z-index: 100;
  }
`;

const NavItem = styled(Link)`
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${colors.mainLightGreen};
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.primary {
      background-color: ${colors.mainBlack};
      color: ${colors.mainWhite};
      border: 1px solid ${colors.mainWhite};
      font-weight: 800;
      &:hover {
        background-color: ${colors.mainWhite};
        color: ${colors.mainBlack};
        border: 1px solid ${colors.mainBlack};
      }
    }

    &.secondary {
      background-color: transparent;
      color: #0070f3;
      border: 1px solid #0070f3;
      background-color: ${colors.mainWhite};
      color: ${colors.mainBlack};
      border: 1px solid ${colors.mainBlack};
      font-weight: 800;
      &:hover {
        background-color: ${colors.mainBlack};
        color: ${colors.mainWhite};
        border: 1px solid ${colors.mainWhite};
      }
    }

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    height: 3px;
    width: 100%;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${(props) =>
        props.isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
    }
    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) =>
        props.isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"};
    }
  }
`;

const PopupForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 200;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <OutterSection>
      <InnerSection>
        <Logo href={"/"}>MyLogo</Logo>
        <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </BurgerMenu>
        <NavItems isOpen={isOpen}>
          <NavItem href="/upload">Upload</NavItem>
          <NavItem href="/">Test 1</NavItem>
          <NavItem href="/">Test 2</NavItem>
          <NavItem href="/">Test 3</NavItem>
        </NavItems>
        <CTAButtons>
          <button className="primary" onClick={togglePopup}>
            Button 1
          </button>
          <button className="secondary">Button 2</button>
        </CTAButtons>
        {isPopupOpen && (
          <PopupForm>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={togglePopup}>
                Close
              </button>
            </form>
          </PopupForm>
        )}
      </InnerSection>
    </OutterSection>
  );
};

export default Navbar;
