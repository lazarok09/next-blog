import styled, { css, DefaultTheme } from "styled-components";
export type PostContainerProps = {
  size: "max" | "content";
};
const PostContainerStyles = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.content};
  `,
};
export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    @media ${theme.media.lteMedium} {
      padding: ${theme.spacings.small};
    }
    ${PostContainerStyles[size](theme)};
    /* @media ${theme.media.lteMedium} {
      padding: calc(${theme.spacings.large} / 2);
    } */
  `}
`;
