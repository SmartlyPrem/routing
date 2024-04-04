import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
const MainContext = createContext();

const Index = (props) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    console.log("cart", cart)

    const addToCart = (pId) => {
        if (cart.indexOf(pId) == -1) {
            setCart([...cart, pId]);
        }
    }

    const removeFromCart = (pId) => {
        const newCart = cart.filter(
            (value) => {
                if (value == pId) return false;
                else return true
            }
        )
        setCart(newCart)
    }

    useEffect(
        () => {
            axios.get('https://fakestoreapi.com/products')
                .then(
                    (success) => {
                        setProducts(success.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
            const lsCart = localStorage.getItem('cartValue');
            if(lsCart !== null){
                setCart(JSON.parse(lsCart))
            }
        }, []
    )

    useEffect(
        () => {
            localStorage.setItem('cartValue', JSON.stringify(cart));
        }, [cart]
    )

    return (
        <MainContext.Provider value={{ cart, addToCart, removeFromCart, products }}>
            {props.children}
        </MainContext.Provider>
    );
}

export default Index;
export { MainContext };
