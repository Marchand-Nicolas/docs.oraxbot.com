import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  title: {
    default: "Orax Bot Documentation",
    template: "%s | Orax Bot Docs",
  },
  description:
    "Documentation for Orax Bot - Connect your favorite Discord servers together with interserver channel synchronization.",
  metadataBase: new URL("https://docs.oraxbot.com"),
  openGraph: {
    title: "Orax Bot Documentation",
    description:
      "Connect your favorite Discord servers together with interserver channel synchronization.",
    url: "https://docs.oraxbot.com",
    siteName: "Orax Bot Docs",
  },
};

const banner = (
  <Banner storageKey="orax-docs-launch">
    Welcome to the Orax Bot documentation!
  </Banner>
);

const navbar = (
  <Navbar
    logo={
      <div className="orax-logo">
        <img src="/logo.png" alt="Orax" />
        <span className="orax-logo-text">Orax</span>
      </div>
    }
    projectLink="https://github.com/Marchand-Nicolas/oraxbot.com"
    chatLink="https://discord.gg/e3pBtbum4A"
  />
);

const footer = (
  <Footer>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        alignItems: "center",
      }}
    >
      <span>MIT {new Date().getFullYear()} © Orax Bot</span>
      <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>
        <a href="https://oraxbot.com" style={{ color: "inherit" }}>
          oraxbot.com
        </a>
        {" · "}
        <a href="https://discord.gg/e3pBtbum4A" style={{ color: "inherit" }}>
          Support Server
        </a>
        {" · "}
        <a
          href="https://ko-fi.com/nicolasmarchand"
          style={{ color: "inherit" }}
        >
          Donate
        </a>
      </span>
    </div>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Marchand-Nicolas/oraxbot.com"
          footer={footer}
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
