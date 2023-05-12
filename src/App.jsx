import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CardPage } from "./pages/Card";
import { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardPage />} />
    </Routes>
  );
}

export default App;
