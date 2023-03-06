import React, { useContext } from "react";
import { AuthContext } from "../context";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About";
import Maincontent from "../pages/Weather";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SliderPage from "../pages/SliderPage";
import { publicRoutes, privateRoutes } from "../router";
import Loader from "./UI/Loader/Loader";
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }
    return (
        <div>
                {isAuth ?  <Routes>
    {privateRoutes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
    </Routes> : <Routes>
    {publicRoutes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
    </Routes>}
        </div>
    );
};
export default AppRouter;