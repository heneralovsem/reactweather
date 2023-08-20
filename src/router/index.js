import About from "../pages/About"
import Weather from "../pages/Weather"
import Error from "../pages/Error"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import { Navigate } from "react-router-dom"

export const privateRoutes = [
    {path: '/about', component: <About/> },
    {path: '/weather', component: <Weather/> },
    {path: '/error', component: <Error/> },
    {path: '/profile', component: <Profile/> },
    {path: '/', component: <Navigate to ="/weather" replace/> },
    {path: '/*', component: <Error/> },
    {path: '/login', component: <Navigate to ="/weather" replace/> },
    
]

export const publicRoutes = [
    {path: '/about', component: <About/> },
    {path: '/error', component: <Error/> },
    {path: '/weather', component: <Weather/> },
    {path: '/login', component: <Login/> },
    {path: '/', component: <Navigate to ="/weather" replace/> },
    {path: '/profile', component: <Navigate to ="/login" replace/> },
    {path: '/*', component: <Error/> },
]