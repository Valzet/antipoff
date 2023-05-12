import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CardPage } from "./pages/Card";
import { useEffect, useState } from "react";
import { mainApi } from "./utils/mainApi";
import { useDispatch } from "react-redux";
import { setUsers } from "./store/usersSlice";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const dispatch = useDispatch();
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  useEffect(() => {
    mainApi.getUsers().then((res) => dispatch(setUsers(res)));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardPage />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
}

export default App;
