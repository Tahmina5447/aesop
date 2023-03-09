import React from 'react';
import AthenaeumImg from '../../../../Images/Athenaeum.jpg'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Athenaeum = () => {
    return (
        <div className='my-40'>
            <div className='flex'>
            <div className='w-1/3 text-secondary'>
                <div className='ml-24'>
                    <p className='text-sm mb-8'>The Athenaeum</p>
                    <h1 className='text-3xl leading-10'>Aesop on Vitamins</h1>
                    <p className='mt-8 leading-7'>Among those we often return to in our formulations are a range of ingredients known to benefit the skin—vitamins C, B3, E and Provitamin B5.</p>
                    <div className='my-8' >
                        <button className='border border-secondary flex items-center p-4 hover:text-primary hover:bg-secondary'>
                            <Link className='text-sm mr-20'>Discover Vitamins </Link>
                            <div><FiArrowRight className='text-sm'></FiArrowRight></div>
                        </button>

                    </div>
                </div>
            </div>
            <div className='w-2/3'>
                <div className='ml-24'>
                <img src={AthenaeumImg} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Athenaeum;