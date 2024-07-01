import * as Styled from "./styles";
import Prism from "prismjs";
import { PrismWrapper } from "./prism-vscode-dark";
import { useEffect } from "react";

export type HtmlContentProps = {
  html: string;
};
export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    // @ts-ignore
    let removeAds = null;
    if (typeof window !== "undefined") {
      Prism.highlightAll();

      removeAds = setTimeout(() => {
        document
          .querySelectorAll("iframe[src*=ads]")
          .forEach((element) => element.remove());
      }, 1000); // 1 second)
    }
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
    </PrismWrapper>
  );
};
