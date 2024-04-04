import React, { useContext, useState } from 'react';
import { MainContext } from '../Context/Index';

const Filter = ({ categories, cat, catHandler, range, rangeHandler, ratingHandler, rating }) => {
    const {products} = useContext(MainContext);
    const clearAll = () => {
        catHandler(null);
        rangeHandler({
            from: 0,
            to: 0
        });
        ratingHandler(null)
    }

    const getItemsCount = (category) => {
        let itemsCount = 0;
        for (let p of products) {
            if (p.category == category) {
                itemsCount++;
            }
        }
        return "(" + itemsCount + ")";
    }

    return (
        <div className=''>
            <div className='p-2 shadow'>
                <div className='text-3xl font-bold py-3'>Categories</div>
                <hr />
                <div>
                    <ul>
                        <li onClick={() => catHandler(null)} className={`capitalize duration-150 cursor-pointer p-2 ps-3 border-b
                        ${cat.length == 0 ? 'active-cat' : ''}
                        `}>All ({products.length})</li>
                        {
                            categories.map(
                                (category, i) => {
                                    return <li key={i} className={`p-3 duration-150 capitalize cursor-pointer
                                    ${(i == categories.length - 1) ? '' : 'border-b'} ${cat.indexOf(category) != -1 ? 'active-cat' : ''}
                                    `} onClick={() => catHandler(category)} >{category} {cat.indexOf(category) != -1 ? getItemsCount(category) : ''} </li>
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className='p-2 shadow mt-5'>
                <div className='text-3xl font-bold py-3'>Price</div>
                <hr />
                <div>
                    <input className='border w-full text-center mt-3 focus:outline-none' type="number" value={range.from} onChange={
                        (e) => {
                            rangeHandler({
                                from: parseInt(e.target.value),
                                to: range.to,
                            })
                        }
                    } />
                    <span className='block text-center font-bold py-3'>To</span>
                    <input className={`border w-full text-center focus:outline-none ${range.from > range.to ? 'border-red-800' : ''}`} min={parseInt(range.from) + 1} type="number" value={range.to} onChange={
                        (e) => {
                            rangeHandler({
                                from: range.from,
                                to: parseInt(e.target.value)
                            })
                        }
                    } />
                </div>
            </div>
            <div className='p-2 shadow mt-5'>
                <div className='text-3xl font-bold py-3'>Rating</div>
                <hr />
                <div>
                    <div>⭐⭐⭐⭐ <span onClick={() => ratingHandler(4)} className={`${rating == 4 ? 'font-bold' : ''} cursor-pointer text-blue-700`}>& Above</span></div>
                    <div>⭐⭐⭐ <span onClick={() => ratingHandler(3)} className={`${rating == 3 ? 'font-bold' : ''} cursor-pointer text-blue-700`}>& Above</span> </div>
                    <div>⭐⭐ <span onClick={() => ratingHandler(2)} className={`${rating == 2 ? 'font-bold' : ''} cursor-pointer text-blue-700`}>& Above</span></div>
                    <div>⭐ <span onClick={() => ratingHandler(1)} className={`${rating == 1 ? 'font-bold' : ''} cursor-pointer text-blue-700`}>& Above</span></div>
                </div>
            </div>
            <div>
                <button onClick={clearAll} className='p-3 text-white bg-red-700 w-full mt-4'>Clear Filter</button>
            </div>
        </div>
    );
}

export default Filter;
