import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { mainApi } from "./utils/mainApi";
import { useDispatch } from "react-redux";
import { setUsers } from "./store/usersSlice";
import { RegistrationPage, LoginPage, HomePage, CardPage } from "./pages";
import {
  setLoggedIn,
  setToken,
  setLoggedOut,
  deleteToken,
} from "./store/authSlice";
import { Protected } from "./components/Protected/Protected";

function App() {
  const location = useLocation();
  let isLoggedIn = localStorage.getItem("logIn") && true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isLoggedIn) {
      dispatch(setLoggedIn(true));
      dispatch(setToken(token));
    }
    if (localStorage.getItem("users")) {
      dispatch(setUsers(JSON.parse(localStorage.getItem("users"))));
    } else {
      mainApi
        .getUsers()
        .then((res) => dispatch(setUsers(res.data)))
        .then((res) =>
          localStorage.setItem("users", JSON.stringify(res.payload))
        )
        .catch((res) => console.log(res));
    }
  }, [isLoggedIn]);

  const handleExit = () => {
    dispatch(setLoggedOut("false"));
    dispatch(deleteToken());
    localStorage.clear();
    navigate("/signin");
  };

  useEffect(() => {
    if (
      (isLoggedIn && location.pathname == "/signin") ||
      location.pathname == "/signup"
    ) {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <HomePage handleExit={handleExit} />{" "}
          </Protected>
        }
      />
      <Route
        path="/:id"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <CardPage handleExit={handleExit} />{" "}
          </Protected>
        }
      />
      <Route path="/signup" element={<RegistrationPage />} />
      <Route path="/signin" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
