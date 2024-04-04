import React, { useContext } from 'react';
import { MainContext } from '../Context/Index';

const Listing = ({cat, range, rating }) => {
    const { addToCart } = useContext(MainContext)
    let {products} = useContext(MainContext)
    if (cat?.length != 0) {
        products = products.filter(
            (prod) => {
                if (cat.indexOf(prod.category) != -1) {
                    return true
                } else {
                    return false
                }
            }
        )
    }

    if (range.to != 0 && (range.to > range.from)) {
        products = products?.filter(
            (prod) => {
                if (prod.price >= range.from && prod.price <= range.to) {
                    return true
                } else {
                    return false
                }
            }
        )
    }

    if (rating != null) {
        products = products?.filter(
            (prod) => {
                if (prod.rating.rate >= rating) {
                    return true
                } else { return false }
            }
        )
    }

    console.log(products)

    return (
        <div className='col-span-4'>
            <div className='px-4'>{products?.length} products found</div>
            <div className="mx-auto max-w-full">
                <div className="m-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products?.map(
                            (product, i) => {
                                return (
                                    <div key={i}>
                                        <div className="group relative" >
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                <img
                                                    src={product.image}
                                                    alt="Front of men's Basic Tee in black."
                                                    className="h-full w-full  object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {product.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-500">{product.rating.rate}</p>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                            </div>
                                        </div>
                                            <button onClick={()=> addToCart(product.id)} className='w-full bg-blue-500 p-2 text-white my-2'>Cart</button>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
            {
                products.length == 0 ? <span className='block font-bold text-center text-2xl text-red-600 mt-20'>Please change your filter or Clear All Filter</span> : ''
            }
        </div>
    );
}

export default Listing;
