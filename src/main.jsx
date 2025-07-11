import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AsgardeoProvider } from "@asgardeo/react";
import fr_FR from "./fr_FR.js";
import "./App.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="k5NQaEQ0dbrVA4aDjiS9KNZ6FW4a"
      baseUrl="https://api.asgardeo.io/t/tomato"
      signInUrl="/sign-in"
      preferences={{
        theme: {
          inheritFromBranding: false,
          // overrides: {
          //   colors: {
          //     primary: {
          //       main: "#000",
          //       contrastText: "white",
          //     },
          //   },
          // },
          mode: "light",
        },
        // i18n: {
        //   language: "fr_FR",
        //   bundles: { fr_FR: fr_FR },
        // },
      }}
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
);
