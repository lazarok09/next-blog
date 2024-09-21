import { screen } from "@testing-library/react";
import PostCard, { PostCardProps } from ".";
import { renderTheme } from "../../styles/render-theme";
import mock from "./mock";
const props: PostCardProps = mock;
describe("<PostCard />", () => {
  it("should render a heading, cover and excerpt", () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole("heading", { name: mock.Title })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: mock.Title })).toBeInTheDocument();
    expect(screen.getByText(mock.Excerpt)).toBeInTheDocument();

    expect(screen.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      `/post/${mock.Slug}`
    );
  });
  it("should match snapshot", () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
