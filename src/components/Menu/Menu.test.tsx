import { fireEvent, screen } from '@testing-library/react';
import { Menu, MenuProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...props} links={undefined} />);
    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(buttonLink).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
  it('should open/close menu on button click', () => {
    renderTheme(<Menu {...props} />);
    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    fireEvent.click(buttonLink);

    // close menu is on the screen
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    // the navigation menu
    expect(screen.queryByRole('navigation')).toBeInTheDocument();

    // the logo heading is on the screen
    expect(screen.getByRole('heading', { name: 'Lázaro Souza' }));
    expect(screen.getByRole('img', { name: 'Lázaro Souza' }));

    // verify if all the links are on the screen but without the home logo link.
    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(mock.links.length);

    // what i expect if the menu icon is clicked again
    fireEvent.click(buttonLink);
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);
    expect(container).toMatchSnapshot();
  });
});
