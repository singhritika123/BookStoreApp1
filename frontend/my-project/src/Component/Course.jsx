import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data); // Check fetched data
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div>
        <div className='mt-28 item-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you{' '}
            <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            optio voluptatibus. Praesentium nulla quas eum animi minus nobis,
            qui sed placeat error aliquam, cumque ducimus pariatur recusandae!
            Vitae, officia quo! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Debitis, saepe? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus, vero!
          </p>
          <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white hover:bg-pink-800 duration-300 px-4 py-2 rounded-md'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
