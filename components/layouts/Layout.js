import Head from "next/head";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../navbar/Navbar";
// import NavBar from "@/components/navbarOld/NavBar";
// import Cookies from "../common/cookies/Cookies";
// import Footer from "@/components/footer/Footer";
// import NavBar from "@/components/navbar/NavBar";

const LayoutWrapper = styled.div``;

const CookiesWrapper = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 12;
`;

export default function Layout({ metaData, children, langObject }) {
  const { locale } = useRouter();

  // const genericTranslations = i18n(languages[locale] ?? {}, "button.content");

  const router = useRouter();

  // const socialMetaTags = [
  //   { name: "description", content: metaData.description },
  //   { name: "keywords", content: metaData.keywords },
  //   { property: "og:title", content: metaData.title },
  //   { property: "og:description", content: metaData.description },
  //   { property: "og:url", content: metaData.url },
  //   { property: "og:type", content: metaData.type },
  //   { property: "og:site_name", content: metaData.siteName },
  //   { property: "og:locale", content: metaData.locale },
  //   { property: "og:image", content: metaData.thumbImageOG },
  //   { property: "og:image:alt", content: metaData.description },
  //   { name: "twitter:card", content: "summary_large_image" },
  //   { name: "twitter:site", content: "@TIOprimePool" },
  //   { name: "twitter:creator", content: "@TIOprimePool" },
  //   { name: "twitter:url", content: metaData.url },
  //   { name: "twitter:title", content: metaData.title },
  //   { name: "twitter:description", content: metaData.description },
  //   { name: "twitter:image", content: metaData.thumbImageTwitter },
  //   { name: "twitter:image:alt", content: metaData.description },
  // ];

  // const themeColors = [
  //   { name: "theme-color", content: "#ff7a04" },
  //   { name: "msapplication-navbutton-color", content: "#ff7a04" },
  //   { name: "apple-mobile-web-app-status-bar-style", content: "#ff7a04" },
  //   { name: "msapplication-TileColor", content: "#ff7a04" },
  // ];

  // const metaTags = [
  //   ...socialMetaTags,
  //   { name: "theme-color", content: "#ff7a04" },
  //   ...themeColors,
  // ];

  return (
    <>
      <Head>
        <title>test</title>

        {/* Fallbacks for favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Additional formats for better compatibility */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div>
        <Navbar />
        <main>{children}</main>
        <footer>
          <p>Footer Content</p>
        </footer>
      </div>
    </>
  );
}
