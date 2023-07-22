import React from 'react';
import './App.css';
import Header from "./component/Header";
import BestSellers from "./component/BestSellers";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./component/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers/>,
    },
    {
        path: "product",
        element: <Product/>,
    }
]);

function App() {
    return (
        <div className={"appContainer"}>
            <Header/>
            <hr className={"divider"}/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
