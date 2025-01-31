import { useState, useRef, useEffect } from "react";
import Logo from "../Logo";
import PageNav from "../PageNav/PageNav";
import { StyledHeader, StyledHamburgerBtn } from "./Header.styles";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <StyledHeader>
      <Logo />
      <HamburgerBtn isOpen={isOpen} onOpenMenu={toggleNav} />
      <PageNav ref={menuRef} isOpen={isOpen} onCloseMenu={toggleNav} />
    </StyledHeader>
  );
}

function HamburgerBtn({ isOpen, onOpenMenu }) {
  return (
    <StyledHamburgerBtn
      onClick={onOpenMenu}
      aria-expanded={isOpen}
      aria-label="Open menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
    </StyledHamburgerBtn>
  );
}

export default Header;
