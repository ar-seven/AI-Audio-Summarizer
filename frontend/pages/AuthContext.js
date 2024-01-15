// AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");

  const login = (token) => {
    // Perform any necessary actions on login (e.g., set tokens, fetch user data)
    setAuthenticated(true);
  };

  const logout = () => {
    // Perform any necessary actions on logout (e.g., clear tokens, reset user data)
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, email, setEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
