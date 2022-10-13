//Libraries
//import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';

import "./custom.scss"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";

//PAGES
import Root from './Root';
import Home from "./pages/Home"
import UpcomingEvents from './pages/UpcomingEvents';
import ErrorPage from "./pages/ErrorPage";
import reportWebVitals from './reportWebVitals';
import Join from "./pages/Join";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element: <Home />

            },
            {
                path:"upcomingEvents",
                element: <UpcomingEvents />
            },
            {
                path: "join",
                element: <Join />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
    //<App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
