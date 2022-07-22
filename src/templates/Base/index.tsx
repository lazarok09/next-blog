import { CheckCircleOutline } from "@styled-icons/material-outlined";
import { useRouter } from "next/dist/client/router";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Footer";
import { GoToTop } from "../../components/GoToTop";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { ToggleTheme } from "../../components/ToggleTheme";
import { SettingsStrapi } from "../../shared-types/settings-strapi";
import * as Styled from "./styles";

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};
export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query.q || "");
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady] = useState(true);
  const inputTimeOut = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeOut.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) {
      return;
    }

    inputTimeOut.current = setTimeout(() => {
      router.push({
        pathname: "/search/",
        query: {
          q: searchValue,
        },
      });
    }, 600); // 0.6 seconds

    return () => clearTimeout(inputTimeOut.current);
  }, [searchValue, router]);

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </Styled.HeaderContainer>

      <Styled.SearchContainer>
        <Styled.SearchInput
          type="search"
          placeholder="Encontre posts"
          name="q"
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />

        <CheckCircleOutline
          className="search-ok-icon"
          aria-lable="input enabled"
        />
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>
      <GoToTop />
    </Styled.Wrapper>
  );
};
