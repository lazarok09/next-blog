import { screen } from "@testing-library/react";
import { ArticleMeta } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<ArticleMeta />", () => {
  it("should render author and category links", () => {
    renderTheme(<ArticleMeta {...mock} />);
    expect(
      screen.getByRole("link", { name: "Lázaro Souza" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Lázaro Souza" })).toHaveAttribute(
      "href",
      "/author/lazaro-souza"
    );
    expect(screen.getByRole("link", { name: "Tech" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Tech" })).toHaveAttribute(
      "href",
      "/category/tech"
    );
    expect(screen.getByRole("link", { name: "JS" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "JS" })).toHaveAttribute(
      "href",
      "/category/javascript"
    );
  });
  it("should format date", () => {
    renderTheme(<ArticleMeta {...mock} />);
    expect(screen.getByText("2 de mar. de 2021")).toHaveAttribute(
      "datetime",
      mock.CreatedAt
    );
  });
  it("should match snapshot", () => {
    const { container } = renderTheme(<ArticleMeta {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should match snapshot with out categories and author", () => {
    const { container } = renderTheme(
      <ArticleMeta {...mock} Author={undefined} Categories={undefined} />
    );
    expect(container).toMatchSnapshot();
  });
});
