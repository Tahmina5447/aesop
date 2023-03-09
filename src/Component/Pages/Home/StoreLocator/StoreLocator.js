import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import StoreSlider from '../StoreSlider/StoreSlider';
import store1 from '../../../../Images/store1.jpg'
import store2 from '../../../../Images/store2.jpg'
import store3 from '../../../../Images/store3.jpg'

const StoreLocator = () => {
    const storeData = [
        {
            img: store1,
            prev: 3,
            id: 1,
            next: 2,
            text: 'Aesop Hollywood Road'

        },
        {
            img: store2,
            prev: 1,
            id: 2,
            next: 3,
            text: 'Aesop Gough Street'

            

        },
        {
            img: store3,
            prev: 2,
            id: 3,
            next: 1,
            text: 'Aesop Harbour City'


        }
    ]
    return (
        <div className='my-40'>
            <div className='flex'>
                <div className='w-1/3 text-secondary'>
                    <div className='ml-24'>
                        <h1 className='text-3xl leading-10'>Store locator</h1>
                        <p className='mt-8 leading-7'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
                        <div className='my-8' >
                            <button className='border border-secondary flex items-center p-4 hover:text-primary hover:bg-secondary'>
                                <Link className='text-sm mr-20'>Find a nearby store</Link>
                                <div><FiArrowRight className='text-sm'></FiArrowRight></div>
                            </button>

                        </div>
                    </div>
                </div>
                <div className='w-2/3'>
                    <div className=' carousel ml-24'>
                        {
                            storeData.map(store=><StoreSlider key={store.id} store={store}></StoreSlider>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocator;