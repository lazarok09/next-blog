import { screen } from "@testing-library/react";
import PostCard, { PostCardProps } from ".";
import { renderTheme } from "../../styles/render-theme";
import mock from "./mock";
const props: PostCardProps = mock;
describe("<PostCard />", () => {
  it("should render a heading, cover and excerpt", () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole("heading", { name: mock.title })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();

    expect(screen.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      `/post/${mock.slug}`
    );
  });
  it("should match snapshot", () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
