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

      .c0 p {
        margin: 4.0rem 0;
      }

      .c0 a,
      .c0 a:visited,
      .c0 a:link {
        color: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 a:hover {
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }

      .c0 pre,
      .c0 code {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        color: #FFFFFF;
        margin: 4.0rem 0;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
      }

      .c0 img {
        width: 100%;
      }

      .c0 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 4.0rem 0;
        max-width: 100%;
      }

      .c0 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c0 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 0 2.4rem;
      }

      .c0 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c0 ul,
      .c0 ol {
        margin: 4.0rem;
      }

      .c0 .table {
        max-width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c0 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c0 table th,
      .c0 table td {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      .c0 iframe {
        max-width: 100%;
        height: 50vh;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 2rem;
        }

        .c0 .image-style-side {
          float: none;
          max-width: 100%;
          margin: 0;
        }
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
