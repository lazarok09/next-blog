import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="olá mundo" />);
    expect(screen.getByRole('link', { name: /olá mundo/i })).toHaveAttribute(
      'href',
      '#target',
    );
  });
  it('should render link with a internal link', () => {
    renderTheme(<LogoLink link="/target" text="olá mundo" />);
    expect(screen.getByRole('link', { name: /olá mundo/i })).toHaveAttribute(
      'href',
      '/target',
    );
  });
  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImage="image.jpg" />,
    );

    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
  it('should render a link with target blank', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" newTab={true} />);

    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
  });
  it('should render image logo with internal link', () => {
    renderTheme(
      <LogoLink link="/target" text="Olá mundo" srcImage="image.jpg" />,
    );

    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImage="image.jpg" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
