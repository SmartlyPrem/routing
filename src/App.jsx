import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './MainPage';
import Home from './Home';
import Cart from './Cart'

const App = () => {
    const routes = createBrowserRouter(
        [
            {
                path: '/',
                element: <MainPage />,
                children: [
                    {
                        path: '',
                        element: <Home />
                    },
                    {
                        path: 'cart',
                        element: <Cart/>
                    }
                ]
            }
        ]
    )
    return (
        <RouterProvider router={routes} />
    );
}

export default App;
