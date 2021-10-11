import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render TextComponent with Children as text', () => {
    renderTheme(<HtmlContent html={'Children'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render HtmlContent with correct font size', () => {
    renderTheme(<HtmlContent html={'Children'} />);
    const paragraph = screen.getByText('Children');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should render HtmlContent with a heading html', () => {
    renderTheme(<HtmlContent html={'<h1>Hello</h1>'} />);
    const heading = screen.getByRole('heading', { name: 'Hello' });
    expect(heading).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html={'Children'} />);
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
