import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { mainApi } from "./utils/mainApi";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./store/usersSlice";
import { RegistrationPage, LoginPage, HomePage, CardPage } from "./pages";
import { setLoggedIn, setToken, setLoggedOut, deleteToken } from "./store/authSlice";
import { Protected } from "./components/Protected/Protected";

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
    const token = localStorage.getItem("token");
    // Если статуст Авторизован, только в этом случае извлекаем все данные из Local Storage
    if (localStorage.getItem("logIn")) {
      dispatch(setLoggedIn(true));
      dispatch(setToken(token));
      mainApi.getUsers().then((res) => dispatch(setUsers(res)));
    }
  }, []);

  const handleExit = () => {
    dispatch(setLoggedOut('false'))
    dispatch(deleteToken())
    localStorage.clear();
        }
  return (
    <Routes>

      <Route path="/" element={<Protected><HomePage handleExit={handleExit}/> </Protected>} />
      <Route path="/:id" element={<Protected><CardPage handleExit={handleExit}/> </Protected>} />
      <Route path="/signup" element={<RegistrationPage />} />
      <Route path="/signin" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
