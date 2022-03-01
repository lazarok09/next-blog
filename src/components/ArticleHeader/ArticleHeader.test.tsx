import { screen } from '@testing-library/react';
import ArticleHeader, { ArticleHeaderProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import { formatDate } from '../../utils/formatDate';
import mock from './mock';
const props: ArticleHeaderProps = mock;
describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover img and meta', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
