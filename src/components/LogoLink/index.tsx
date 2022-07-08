import * as Styled from './styles';
import { Heading } from '../Heading/index';
import Link from 'next/link';

export type LogoLinkProps = {
  text: string;
  srcImage?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  srcImage = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

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
