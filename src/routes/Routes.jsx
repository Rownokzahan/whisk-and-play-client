import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import Errorpage from "../pages/Errorpage";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";

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
                path: "/toy-details/:id",
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://whisk-and-play-server-rownokzahan.vercel.app/toys/${params.id}`)
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