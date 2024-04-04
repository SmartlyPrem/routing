import React, { useContext, useState } from 'react';
import { MainContext } from './Context/Index';

const Cart = () => {
    const { products, cart, removeFromCart } = useContext(MainContext);
    let cartProducts = [];
    let total = 0;
    if (cart.length != 0) {
        cartProducts = products.filter(
            (product) => {
                if (cart.indexOf(product.id) == -1) return false;
                else {
                    total += Number(product.price);
                    return true
                };
            }
        )
    }

    const [count, setCount] = useState(0);

    return (
        <div className='max-w-[1250px] mx-auto'>
            <h2 className="text-3xl font-semibold mb-8">Shopping Cart</h2>
            {/* Cart items */}
            {
                cart?.length != 0 ? 
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Item 1 */}
                    {
                        cartProducts.map(
                            (prod) => {
                                return <div key={prod.id} className="bg-white p-4 rounded-md shadow-md grid grid-cols-2 capitalize gap-6">
                                    <div>
                                        <img className='h-[130px] cover' src={prod.image} alt="" />
                                        <h3 className="text-lg font-semibold mb-2 truncate">{prod.title}</h3>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 font-semibold">${prod.price}</p>
                                        <p className="text-gray-600 font-semibold">Quantity:</p>
                                        <div className='grid grid-cols-3 my-2'>
                                            <button onClick={()=> setCount(count+1)} className='bg-blue-300 rounded text-white font-bold'>+</button>
                                            <span className='text-center'>{count}</span>
                                            <button onClick={()=> setCount(count-1)}  className='bg-blue-300 rounded text-white font-bold'>-</button>
                                        </div>
                                        <p className="text-blue-500 font-semibold mt-2">Total: $1999.98</p>
                                        <button onClick={()=>removeFromCart(prod.id)} className='w-full p-1 bg-blue-500 rounded text-white mt-2'>Remove</button>
                                    </div>
                                </div>
                            }
                        )
                    }
                </div>
                {/* Total Price */}
                <div className="mt-8 bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Total Price</h3>
                    {/* <p className="text-gray-600">Subtotal: $2839.94</p>
                <p className="text-gray-600">Tax: $283.99</p> */}
                    <p className="text-blue-500 font-semibold mt-2">Total: ${total.toFixed(2)}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Checkout
                    </button>
                </div>
            </div> : <span className='text-center block text-2xl capitalize'>cart Khali Hai...</span>
            }
        </div>
    );
}

export default Cart;
