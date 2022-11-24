import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Product from '../components/Product/Product';
import Main from '../layout/Main';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
                
            },
            {
                path: '/product',
                element: <Product></Product>,
                loader: () => {
                    return fetch(`http://localhost:5000/product`)
                }
            }
        ]
    }
])
const Routers = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routers;