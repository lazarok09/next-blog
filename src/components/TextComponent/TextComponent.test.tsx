import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render TextComponent with Children as text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render TextComponent with correct font size', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const paragraph = screen.getByText('Children');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
