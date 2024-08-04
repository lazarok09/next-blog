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
  console.log("🚀 ~ BaseTemplate ~ settings:", settings)
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
          {settings.BlogName} | {settings.BlogDescription}
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          property="og:image"
          content={encodeURIComponent(settings.Logo.Url)}
        />
        <link rel="image_src" href={encodeURIComponent(settings.Logo.Url)} />
        <meta
          property="og:title"
          content={`${settings.BlogName} ${settings.BlogDescription}`}
        />

        <meta property="og:description" content={settings.BlogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${config.url}/`} />
        <meta property="og:site_name" content={settings.BlogName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`${config.url}/`} />
        <link rel={"canonical"} href={`${config.url}/`} />

        <meta
          name="twitter:title"
          content={`${settings.BlogName} ${config.defaultSlug}`}
        />
        <meta name="twitter:description" content={settings.BlogDescription} />
        <meta
          name="twitter:image"
          content={encodeURIComponent(settings.Logo.Url)}
        />
      </Head>
      <ToggleTheme />
      <Menu
        Links={settings.MenuLink}
        BlogName={settings.BlogName}
        Logo={encodeURIComponent(settings.Logo.Url)}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={settings.BlogName}
          blogDescription={settings.BlogDescription}
          logo={encodeURIComponent(settings.Logo.Url)}
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
        <Footer footerHtml={settings.Text} />
      </Styled.FooterContainer>
      <GoToTop />
    </Styled.Wrapper>
  );
};
