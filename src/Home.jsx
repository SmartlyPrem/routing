import React, { useEffect, useState } from 'react';
import Filter from './Component/Filter';
import Listing from './Component/Listing'
import axios from 'axios';

const Home = () => {
  const [categories, setCategory] = useState([]);
  const [cat, setCat] = useState([]);
  const [range, setRange] = useState({
    from: 0,
    to: 0
  })
  const [rating, setRating] = useState(null);
  const [count, setCount] = useState('');
  const [countFilter, setCountFilter] = useState(null);

  useEffect(
    () => {
      axios.get('https://fakestoreapi.com/products/categories')
        .then(
          (success) => {
            setCategory(success.data)
          }
        )
        .catch(
          (error) => {
            console.log(error);
          }
        )
    }, []
  )

  const catHandler = (catg) => {
    if (catg == null) {
      setCat([]);
      setCountFilter(null)
      return
    };
    const ind = cat.indexOf(catg);
    if (ind != -1) {
      const newCat = cat.filter(
        (d) => {
          if (d != catg) return true;
          else return false;
        }
      );
      setCat(newCat);
    } else {
      const newCat = [...cat, catg];
      setCat(newCat);
    }
  }

  return (
    <>
      <div className='text-center text-5xl font-bold'>Products Listing</div>
      <div className='max-w-[1200px] mx-auto grid grid-cols-5 mt-4'>
        <Filter countFilter={countFilter} rating={rating} ratingHandler={setRating} range={range} rangeHandler={setRange} categories={categories} cat={cat} catHandler={catHandler} count={count} />
        <Listing rating={rating} range={range} cat={cat} />
      </div>
    </>
  )
}

export default Home;