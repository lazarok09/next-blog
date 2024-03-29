import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    // disable ads
    iframe[src*='ads'] {
      display: none;
    }

    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    line-height: 1.5;
    p {
       margin: ${theme.spacings.medium} 0;
    }
    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
      text-decoration: none;
    }
    a:hover {
      filter: brightness(80%);
      text-decoration: underline;
    }
    img {
       width: 100%;
    }
    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
      max-width: 100%;

    }
    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }
    .image-style-side {
      float: right;
      max-width: 50%;
      margin: 0 ${theme.spacings.medium};
    }
    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }
    ul,
    ol {
            margin: ${theme.spacings.medium} ${theme.spacings.xlarge};

    }
    .table {
      max-width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
            margin: ${theme.spacings.medium} 0;

    }
    table th,
    table td{
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }
        blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }
    }
    iframe {
    max-width: 100%;
    height: 50vh;
    }
    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        float: none;
        max-width: 100%;
        margin: 0;
      }
    }
  `}
`;
