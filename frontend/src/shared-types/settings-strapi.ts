import { MenuPropsLinks } from "../components/Menu";
import { StrapiImage } from "./StrapiImage";

export type SettingsStrapi = {
  ID: string;
  BlogName: string;
  BlogDescription: string;
  Logo: StrapiImage;
  MenuLink: MenuPropsLinks[];
  Text: string;
};
