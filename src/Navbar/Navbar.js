import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex text-black p-6 '>
            <div className='flex items-center w-3/4 '>
                <div>
                    <Link className='m-3'>Skin Care</Link>
                    <Link className='m-3'>Body & Hand</Link>
                    <Link className='m-3'>Hair</Link>
                    <Link className='m-3'>Fragrance</Link>
                    <Link className='m-3'>Home</Link>
                    <Link className='m-3'>Kits & Travel</Link>
                    <Link className='m-3'>Gifts</Link>
                    <Link className='m-3'>Read</Link>
                    <Link className='m-3'>Stores</Link>
                </div>
                <div>
                    <Link><FaSearch className='text-gray-600'></FaSearch></Link>
                </div>
            </div>
            <div className='w-1/4'>
                <Link className='m-3'>Log in</Link>
                <Link className='m-3'>Cabinet</Link>
                <Link className='m-3'>Cart</Link>
            </div>
        </div>
    );
};

export default Navbar;