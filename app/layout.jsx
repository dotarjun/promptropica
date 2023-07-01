import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { Children } from "react";

export const metadata = {
  title: "Promptropica",
  description: "Discover and Share AI prompts",
  favicon: "/assets/favicon.ico",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.favicon} sizes="any" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
