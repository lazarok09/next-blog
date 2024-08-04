import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import React, { useState } from "react";
import { LogoLink } from "../LogoLink";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import { MenuLink } from "../MenuLink";
import * as Styled from "./styles";

export type MenuPropsLinks = {
  ID: string;
  Link: string;
  NewTab?: boolean;
  Text: string;
};

export type MenuProps = {
  Links: MenuPropsLinks[];
  BlogName: string;
  Logo: string;
};

export const Menu = ({ Links: links = [], BlogName: blogName, Logo: logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </Styled.OpenClose>

      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink Link="/" Text={blogName} SrcImage={logo}  />
          </Styled.Logo>

          {links.map((link) => (
            <MenuLink key={link.ID} Link={link.Link} NewTab={link.NewTab}>
              {link.Text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
