import { useRouter } from 'next/dist/client/router';
import { Footer } from '../../components/Footer';
import { GoToTop } from '../../components/GoToTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { ToggleTheme } from '../../components/ToggleTheme';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};
export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
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
        <form action="/search/" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Encontre posts"
            name="q"
            defaultValue={router.query.q}
          />
        </form>
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>
      <GoToTop />
    </Styled.Wrapper>
  );
};
