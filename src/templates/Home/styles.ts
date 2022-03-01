import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    & > img {
      height: 40px;
    }
    background: ${theme.colors.white};
  `}
`;
