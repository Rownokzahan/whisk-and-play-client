import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import Errorpage from "../pages/Errorpage";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import EditToy from "../pages/MyToys/EditToy";
import AddToy from "../pages/AddToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/all-toys",
                element: <AllToys />,
                loader: () => fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/all-toys`)
            },

            {
                path: "/toy-details/:id",
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/toys/${params.id}`)
            },

            {
                path: "/add-toy",
                element: <PrivateRoute><AddToy /></PrivateRoute>,
            },


            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys /></PrivateRoute>,
            },
            {
                path: "/my-toys/edit/:id",
                element: <PrivateRoute><EditToy /></PrivateRoute>,
            },
            
            {
                path: "/blog",
                element: <Blog />
            },

            {
                path: "/login",
                element: <Login />
            },

            {
                path: "/register",
                element: <Register />
            },
        ]
    },
]);

export default router;