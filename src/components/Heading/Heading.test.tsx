import { screen } from '@testing-library/react';
import { BlogThemeProvider } from '../../contexts/BlogThemeContext';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    // capitura nosso heading pelo texto passado acima ^^
    const heading = screen.getByRole('heading', { name: 'Texto' });

    // testa os valores padrões do heading
    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });
  // teste de props
  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    // testa a passagem da prop em boolean
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
  // daqui pra baixo testa todos os tamanhos de fonte

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size={'small'}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    // testa a passagem da prop em boolean
    expect(heading).toHaveStyle({
      // color: theme.font.sizes
      'font-size': theme.font.sizes.medium,
    });
    rerender(
      <BlogThemeProvider>
        <Heading size="big">texto</Heading>
      </BlogThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
    rerender(
      <BlogThemeProvider>
        <Heading size="medium">texto</Heading>
      </BlogThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
    rerender(
      <BlogThemeProvider>
        <Heading size="huge">texto</Heading>
      </BlogThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });
  // testa o media query e se o tamanho da fonte vai mudar com a regra
  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });
    // o mais complicado
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });
  // se a letra fica mauíscula ao passar a prop uppercase
  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);
    expect(container).toMatchSnapshot();
  });
});
