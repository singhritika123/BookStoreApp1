import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-10 my-2'>
    <div className="card w-80 h=80 bg-base-100 shadow-xl hover:scale-105 duration:500">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer p-4 border-black">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
