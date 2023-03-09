import React from 'react';

const StoreSlider = ({store}) => {
    const { img, id, prev, next,text } = store;
    return (
       
            <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='slide-img w-full'>
                <img src={img} alt="" className=" h-96 w-full" />
                <div>
                    <p className='text-secondary mt-6'>{text}</p>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                <a href={`#slide${prev}`} className="p-8  text-xl bg-secondary text-primary">❮</a>
                <a href={`#slide${next}`} className=" p-8 text-xl bg-secondary text-primary">❯</a>
            </div>

        </div>
        
    );
};

export default StoreSlider;