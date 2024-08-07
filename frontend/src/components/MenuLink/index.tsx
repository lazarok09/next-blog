import * as Styled from "./styles";
import Link from "next/link";

export type MenuLinkProps = {
  children: React.ReactNode;
  Link: string;
  NewTab?: boolean;
};

export const MenuLink = ({
  children,
  Link: link,
  NewTab: newTab = false,
}: MenuLinkProps) => {
  const target = newTab ? "_blank" : "_self";

  const nextLink = link.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container href={link} target={target}>
          {children}
        </Styled.Container>
      </Link>
    );
  }
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
