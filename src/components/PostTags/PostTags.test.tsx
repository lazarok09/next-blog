import { screen } from '@testing-library/react';
import { PostTags, PostTagsProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: PostTagsProps = mock;
describe('<PostTags', () => {
  it('should render', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
