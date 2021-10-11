import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined';
export const GoToTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to Top" title="Go to Top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
