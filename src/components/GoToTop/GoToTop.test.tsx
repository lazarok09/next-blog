import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoToTop } from '.';

describe('<GoToTop />', () => {
  it('should render Go to Top button', () => {
    const { container } = renderTheme(<GoToTop />);
    expect(screen.getByRole('link', { name: 'Go to Top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to Top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: fixed;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        z-index: 6;
        bottom: 2rem;
        right: 2rem;
        width: 4rem;
        height: 4rem;
        opacity: 0.8;
        color: #FFFFFF;
        background: #000000;
      }

      .c0:hover {
        opacity: 1;
      }

      .c1 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      <div>
        <a
          aria-label="Go to Top"
          class="c0"
          href="#"
          title="Go to Top"
        >
          <svg
            aria-hidden="true"
            class="c1"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            />
            <path
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
