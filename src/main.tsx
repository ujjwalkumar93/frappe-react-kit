import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Theme, ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Theme>
        <App />
      </Theme>
    </ChakraProvider>
  </React.StrictMode>
);
