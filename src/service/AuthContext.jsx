import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenciated, setIsAuthenciated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenciated(true);
    } else {
      setIsAuthenciated(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenciated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenciated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
