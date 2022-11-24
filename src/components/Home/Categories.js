import React from 'react';
import { Link } from 'react-router-dom';
import category1 from '../../assets/category (1).jpeg'
import category2 from '../../assets/category (2).jpeg'
import category3 from '../../assets/category (3).jpeg'

const Categories = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-black-400 my-12'>All Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link to='/product'><div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={ category1} alt="Shoes" /></figure>
                </div>
                </Link>
                <Link to='/product'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={ category2} alt="Shoes" /></figure>
                    </div>
                </Link>
                <Link to='/product'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={ category3} alt="Shoes" /></figure>
            </div>
                </Link>
            </div>
            <h1 className='text-center font-bold text-3xl text-black-400 mt-24'>About Us</h1>
            <section className='flex mt-12 mb-12 mx-6'>
            
                <div className='w-3/4 text-left w-3/5 pr-4'>
                    <h3 className='text-3xl font-bold'>MORE INFORMATION ABOUT US</h3>
                    <p className='text-3xl'>M Computers Shop is the ultimate company is also the leader of the market with more than 600 workers is the country </p>
                    <Link className='text-blue-600 font-semibold' to='/blog'>Our Blogs</Link>
                </div>
                <div className='mx-auto grid grid-cols-3 gap-6 w-2/5 '> 
                    <div className='w-40'>
                        <h1 className='font-semibold mb-3'>Our Team</h1>
                        <div className='border border-2 border-yellow-400 rounded-full p-4 py-12'><span className='text-4xl '>125</span> <br />
                        <span>PAY</span></div>
                    </div>
                    <div className='w-40'>
                        <h1 className='font-semibold mb-3'>Our Operator</h1>
                        <div className='border border-2 border-yellow-400 rounded-full p-4 py-12'><span className='text-4xl '>616K</span> <br />
                        <span>EMPLOYES</span></div>
                    </div>
                    <div className='w-40'>
                        <h1 className='font-semibold mb-3'>Our Customer</h1>
                        <div className='border border-2 border-yellow-400 rounded-full p-4 py-12 '><span className='text-4xl '>100+</span> <br />
                        <span>ANS</span></div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Categories;