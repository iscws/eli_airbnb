import { Navigate } from "react-router-dom";
import React from "react";
import Demo from "@/views/demo";
// import Home from "@/views/home";
// import Detail from "@/views/detail";
// import Entires from "@/views/entires";

const Home = React.lazy(() => import("@/views/home"))
const Detail = React.lazy(() => import("@/views/detail"))
const Entires = React.lazy(() => import("@/views/entires"))

const routes = [
    {
        path: '/',
        element: <Navigate to="/home" />,
    }, {
        path: '/home',
        element: <Home />
    }, {
        path: '/Detail',
        element: <Detail />
    }, {
        path: '/Entires',
        element: <Entires />,
    }, {
        path: '/Demo',
        element: <Demo />
    }
]

export default routes