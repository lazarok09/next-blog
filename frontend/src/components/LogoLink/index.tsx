import * as Styled from "./styles";
import { Heading } from "../Heading/index";
import Link from "next/link";

export type ComponentsMenuLink = {
  Text: string;
  ID?: string;
  NewTab?: boolean;
  Link: string;
};

export type LogoLinkProps = {
  SrcImage?: string;
} & ComponentsMenuLink;

export const LogoLink = ({
  Text: text,
  SrcImage: srcImage = "",
  Link: link,
  NewTab: newTab = false,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? "_blank" : "_self";

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container target={target}>
            {/* eslint-disable-next-line */}
            {srcImage ? <img src={srcImage} alt={text} /> : text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} target={target}>
        {/* eslint-disable-next-line */}
        {srcImage ? <img src={srcImage} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};
