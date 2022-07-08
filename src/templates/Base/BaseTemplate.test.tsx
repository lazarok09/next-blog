import { screen } from '@testing-library/react';
import { BaseTemplate, BaseTemplateProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: BaseTemplateProps = mock;
describe('<BaseTemplate />', () => {
  it('should render a image heading with alt text', () => {
    renderTheme(<BaseTemplate {...props} />);
    expect(
      screen.getByRole('img', {
        name: 'challenge accepted - A blog to talk about programing and tecnology',
      }),
    ).toBeInTheDocument();
  });
  it('should render a menu and his icon', () => {
    renderTheme(<BaseTemplate {...props} />);
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
  });
  it('should render a footer with text', () => {
    renderTheme(<BaseTemplate {...props} />);
    expect(screen.getByText('texto')).toBeInTheDocument();
  });
  it('should render a go to top component', () => {
    renderTheme(<BaseTemplate {...props} />);
    expect(screen.getByLabelText(/Go to Top/i)).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);
    expect(container).toMatchSnapshot();
  });
});
