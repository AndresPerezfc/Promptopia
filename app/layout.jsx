import "@styles/globals.css";
import { Children } from "react";

export const metada = {
  title: "Promptopia",
  description:
    "Sitio web para crear y compartir promps para las inteligencias artificiales",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
