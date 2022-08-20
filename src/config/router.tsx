import Page404 from "@src/views/404";
import Browser from "@src/views/Browser";
import Profiles from "@src/views/Profiles";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import API from "./api";

interface IProtect {
  children: JSX.Element;
}

const Protect = ({ children }: IProtect) => {
  const navigate = useNavigate();

  const auth = async () => {
    const response: any = await API.get("/user/auth")
      .then((value: any) => value.data)
      .catch((value: any) => value.response.data);

    if (!response.success) {
      navigate("/signin");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return children;
};

interface IIsLoggedIn {
  children: JSX.Element;
}

const IsLoggedIn = ({ children }: IIsLoggedIn) => {
  const navigate = useNavigate();

  const auth = async () => {
    const response: any = await API.get("/user/auth")
      .then((value: any) => value.data)
      .catch((value: any) => value.response.data);

    if (response.success) {
      navigate("/profiles");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return children;
};

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/"
        element={
          <IsLoggedIn>
            <Home />
          </IsLoggedIn>
        }
      />
      <Route
        path="/signin"
        element={
          <IsLoggedIn>
            <SignIn />
          </IsLoggedIn>
        }
      />
      <Route
        path="/signup"
        element={
          <IsLoggedIn>
            <SignUp />
          </IsLoggedIn>
        }
      />
      <Route
        path="/profiles"
        element={
          <Protect>
            <Profiles />
          </Protect>
        }
      />
      <Route
        path="/browser"
        element={
          <Protect>
            <Browser />
          </Protect>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
