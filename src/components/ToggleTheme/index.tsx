import { useContext, useEffect, useState } from "react";
import { BlogThemeContext } from "../../contexts/BlogThemeContext";
import * as Styled from "./styles";

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) return;

    const newTheme = JSON.parse(localTheme);
    if (newTheme.name === "inverted") {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (setTheme) {
      setTheme(checked ? "inverted" : "default");
    }
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((checked) => !checked);
    if (setTheme) {
      setTheme(checked ? "inverted" : "default");
    }
  };
  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toggle light and dark modes
        <Styled.Input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="Dark mode active"
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
