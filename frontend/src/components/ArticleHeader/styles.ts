import styled, { css } from "styled-components";
import { Title as HeadingStyles } from "../Heading/styles";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
      @media ${theme.media.lteMedium} {
        font-size: calc(${theme.font.sizes.medium} + 1rem);
      }
    }
  `}
`;
export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    font-size: ${theme.font.sizes.medium};
    @media ${theme.media.lteMedium} {
      font-size: calc(${theme.font.sizes.small} + 0.2rem);
    }
  `}
`;
export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
