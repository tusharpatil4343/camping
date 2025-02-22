import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Tours from "../Pages/Tours/Tours";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

export let route = createBrowserRouter([
    {
        path: "/",
        element:<MainPage/>
    },
    {
        path: "/tours",
        element:<Tours/>
    },
    {
        path: "*",
        element:<PageNotFound/>
    }
]);