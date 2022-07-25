import { CheckCircleOutline } from "@styled-icons/material-outlined";
import { Cancel } from "@styled-icons/material-outlined";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Footer";
import { GoToTop } from "../../components/GoToTop";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { ToggleTheme } from "../../components/ToggleTheme";
import config from "../../config";
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
  const [isReady, setIsReady] = useState(true);
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
      setIsReady(false);
      router
        .push({
          pathname: "/search/",
          query: {
            q: searchValue,
          },
        })
        .then(() => setIsReady(true));
    }, 600); // 0.6 seconds

    return () => clearTimeout(inputTimeOut.current);
  }, [searchValue, router]);

  return (
    <Styled.Wrapper>
      <Head>
        <title>
          {settings.blogName} | {settings.blogDescription}
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta property="og:image" content={settings.logo.url} />
        <link rel="image_src" href={settings.logo.url} />
        <meta
          property="og:title"
          content={`${settings.blogName} ${settings.blogDescription}`}
        />

        <meta property="og:description" content={settings.blogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${config.url}/`} />
        <meta property="og:site_name" content={settings.blogName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`${config.url}/`} />
        <link rel={"canonical"} href={`${config.url}/`} />

        <meta
          name="twitter:title"
          content={`${settings.blogName} ${config.defaultSlug}`}
        />
        <meta name="twitter:description" content={settings.blogDescription} />
        <meta name="twitter:image" content={settings.logo.url} />
      </Head>
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
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-lable="input disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-lable="input enabled"
          />
        )}
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>
      <GoToTop />
    </Styled.Wrapper>
  );
};
