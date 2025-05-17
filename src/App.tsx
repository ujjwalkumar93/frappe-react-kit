import { useFrappeAuth, FrappeAuthProvider } from "../src";

function App() {
  const { currentUser, login, logout } = useFrappeAuth();

  return (
    <>
      <h1>Frappe Auth Test</h1>
      <button onClick={() => login("usr", "pwd")}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
      <p>Current User: {currentUser || "Not Logged In"}</p>
    </>
  );
}

export default function WrappedApp() {
  return (
    <FrappeAuthProvider>
      <App />
    </FrappeAuthProvider>
  );
}
