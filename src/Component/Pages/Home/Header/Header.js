import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../../Images/Banner.jpg'
import { FiArrowRight } from "react-icons/fi";
// import './Header.css'

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${Banner})`, backgroundSize:'cover' }}>
            <div className='flex w-1/2 py-28 text-primary'>
                <div>
                    <Link className='text-4xl ml-20'>Aesop</Link>
                </div>
                <div className='mx-20'>
                    <p className='text-sm'>Home fragrance</p>
                    <h1 className='text-3xl my-5 leading-10'>Introducing Aromatique Incense</h1>
                    <p className='leading-7'>Discover a trio of transportive aromas for wandering minds—Murasaki, Kagerou and Sarashina Aromatique Incense—and the Bronze Incense Holder that elevates their unassuming form.</p>
                    <div className='my-8' >
                        <button className='border border-primary flex items-center p-4 hover:text-black hover:bg-primary'>
                            <Link className='text-sm mr-20'>Explore the collection</Link>
                            <div><FiArrowRight className='text-sm'></FiArrowRight></div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;