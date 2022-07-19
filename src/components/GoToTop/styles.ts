import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    opacity: 0.8;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
  `}
  &:hover {
    opacity: 1;
  }
`;
