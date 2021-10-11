import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    p {
      margin: ${theme.spacings.xlarge} 0;
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
    pre, code{
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.xlarge} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }
  }
    img {
        width: 100%;

    }
    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
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
      margin: ${theme.spacings.xlarge};
    }
    .table {
      max-width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table th,
    table td{
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
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
