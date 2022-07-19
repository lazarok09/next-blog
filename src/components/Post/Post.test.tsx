import { screen } from "@testing-library/react";
import { Post, PostProps } from ".";
import { renderTheme } from "../../styles/render-theme";
import { formatDate } from "../../utils/formatDate";
import mock from "./mock";
const props: PostProps = mock;

describe("<Post />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Post {...props} />);
    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(
      screen.getByText(/^Lázaro está citando isso pra editar/i)
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
