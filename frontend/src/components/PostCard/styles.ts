import styled, { css } from "styled-components";
import { Title as HeadingStyles } from "../Heading/styles";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: 0;
      margin-top: calc(${theme.spacings.small} - 0.6rem);
      margin-bottom: ${theme.spacings.small};
    }

    & a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }
    & a:hover {
      color: ${theme.colors.secondary};
    }
    // when we hover this element & i want to change the behavier of the a tag
    &:hover a {
      color: ${theme.colors.secondary};
    }
    &:hover img {
      opacity: 0.8;
    }
  `}
`;
export const Cover = styled.img`
  ${() => css`
    max-width: 100%;
    height: 100%;
    max-height: 280px;
    transition: opacity 300ms ease-in-out;
  `}
`;
export const Excerpt = styled.p`
  ${() => css`
    word-break: break-word;
  `}
`;
