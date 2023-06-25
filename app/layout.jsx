import Nav from "@components/Nav";
import "@styles/globals.css";
import { Children } from "react";

export const metadata = {
  title: "Promptropica",
  description: "Discover and Share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
