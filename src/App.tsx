import { FrappeAuthProvider } from "../src";
import { LoginForm } from "./components/LoginForm";
import { Flex, Box } from "@chakra-ui/react";

function App() {
  return (
    <Flex height="100vh" align="center" justify="center" bg="gray.50" px={4}>
      <LoginForm
        content={{
          heading: "Login to QwickApp",
          description:"Manage your content with full control.",
        }}
        handlers={{
          onChange: (field, value) => console.log(`${field}: ${value}`),
          onSubmit: () => console.log("Submitted"),
        }}
        style={{
          wrapper: {
            maxW: "md",
            p: 6,
            border: "1px solid #ccc",
            borderRadius: "lg",
            bg: "white",
          },
          heading: { textAlign: "center" },
          logoWrapper: { mb: 2, justifyContent:"center", justifyItems: 'center' },
          brandWrapper: {
            fontSize: "xl",
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
        layoutConfig={{
          logoPosition: "top",
          brandPosition: "belowLogo",
          direction: "column",
        }}
        slots={{
          logo: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUqmONq4LbR6wVgKgFg2zIhY4EgRpBd1iaw&s" alt="Brand Logo" style={{ height: 60 }} />,
          brandName: "QwickApp",
          belowEmail: (
            <Box fontSize="sm" color="gray.500">
              Your email is safe with us
            </Box>
          ),
          belowPassword: (
            <Box>
              <input type="checkbox" /> Keep me logged in
            </Box>
          ),
          belowSubmit: (
            <Box textAlign="right" color="blue.500" fontSize="sm">
              <a href="#">Forgot password?</a>
            </Box>
          ),
          footer: (
            <Box textAlign="center">
              Don't have an account? <a href="#">Sign Up</a>
            </Box>
          ),
        }}
      />
    </Flex>
  );
}

export default function WrappedApp() {
  return (
    <FrappeAuthProvider>
      <App />
    </FrappeAuthProvider>
  );
}
