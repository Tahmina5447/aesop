import React from 'react';
import CorporateImgs from '../../../../Images/Corporate.jpg'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Corporate = () => {
    return (
        <div className='my-40'>
            <div className='flex'>
                <div className='w-2/3'>
                    <div className='mr-24'>
                        <img src={CorporateImgs} alt="" />
                    </div>
                </div>
                <div className='w-1/3 text-secondary'>
                    <div className='mr-24'>
                        <p className='text-sm mb-8'>Tokens of appreciation</p>
                        <h1 className='text-3xl leading-10'>Corporate gifts</h1>
                        <p className='mt-8 leading-7'>Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery. </p>
                        <div className='my-8' >
                            <button className='border border-secondary flex items-center p-4 hover:text-primary hover:bg-secondary'>
                                <Link className='text-sm mr-20'>Learn more about this service</Link>
                                <div><FiArrowRight className='text-sm'></FiArrowRight></div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Corporate;