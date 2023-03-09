import React from 'react';
import img1 from '../../../../Images/img1.avif'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Interior = () => {
    return (
        <div className='flex my-40'>
            <div className='w-2/3'>
                <div className='mr-24'>
                <img src={img1} alt="" />
                </div>
            </div>
            <div className='w-1/3 text-secondary'>
                <div className='mr-24'>
                    <h1 className='text-3xl leading-10'>Interior fragrances to lift the mood</h1>
                    <p className='mt-8 leading-7'>Ideal for home or office spaces in need of refreshment, our Home range comprises a number of fragrant preparations, from incense to room sprays.</p>
                    <div className='my-8' >
                        <button className='border border-secondary flex items-center p-4 hover:text-primary hover:bg-secondary'>
                            <Link className='text-sm mr-20'>Browse Scented Home </Link>
                            <div><FiArrowRight className='text-sm'></FiArrowRight></div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interior;