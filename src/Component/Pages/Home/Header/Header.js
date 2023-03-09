import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../../Images/Banner.jpg'
import { FaArrowRight } from "react-icons/fa";
import './Header.css'

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${Banner})`, color: '#FFFEF2', backgroundSize:'cover' }}>
            <div className='flex w-1/2 py-28'>
                <div>
                    <Link className='text-4xl mx-10'>Aesop</Link>
                </div>
                <div className='mx-10'>
                    <p className='text-sm'>Home fragrance</p>
                    <h1 className='text-3xl my-5'>Introducing Aromatique Incense</h1>
                    <p >Discover a trio of transportive aromas for wandering minds—Murasaki, Kagerou and Sarashina Aromatique Incense—and the Bronze Incense Holder that elevates their unassuming form.</p>
                    <div className='my-8' >
                        <button className='border border-white flex items-center p-4 hover:text-black btnHover'>
                            <Link className='text-sm mr-20'>Explore the collection</Link>
                            <div><FaArrowRight className='text-sm'></FaArrowRight></div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;