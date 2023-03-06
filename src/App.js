import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  let hours = 1; // to clear the localStorage after 1 hour
  let now = new Date().getTime();

  let setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.removeItem("setupTime");
      localStorage.removeItem("city");
      localStorage.setItem("setupTime", now);
    }
  }

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);
  console.log(isAuth);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
