import React from "react";
import { WebLink, WebLinksLayout, Toggle } from "./HeaderLinkStyles";
import Icons from "../Icons/Icons";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderLink = () => {
  const { locale: activeLocale, locales, asPath } = useRouter();

  const availableLocales = locales?.filter((locale) => locale !== activeLocale);

  return (
    
    <WebLinksLayout>
    <Icons></Icons>
    {availableLocales?.map((locale) => {
            return (
              <div key={locale}>
                <Link href={asPath} locale={locale}>
                  <Toggle>{locale.toUpperCase()}</Toggle>
                </Link>
              </div>
            );
          })}
    <WebLink href="/CV.pdf">Resume</WebLink>
  </WebLinksLayout>
  )
};

export default HeaderLink;
