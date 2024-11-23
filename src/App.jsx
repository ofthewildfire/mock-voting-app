import "./App.css";
import Construction from "./components/Construction";
import MainPage from "./components/MainPage";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  app,
} from "./utils/firebase";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set the logged-in user
      console.log("User logged in:", result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user state
      console.log("User logged out");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div>
      <h1>Mock Voting App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <hr />
          <Construction />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <MainPage />
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
}

export default App;
