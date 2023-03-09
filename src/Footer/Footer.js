import React from 'react';
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-info px-10 pt-20 pb-8'>
            <div className='flex text-primary'>
                <div className='w-2/5 mr-8'>
                    <div className='flex items-center border border-primary'>
                        <input className='bg-info p-2 w-full' type="text" placeholder='Email address' />
                    </div>
                    <div className='flex my-5'>
                        <div>
                            <input className='bg-info mr-2 ' type="checkbox" />
                        </div>
                        <div>
                            <p className='text-sm leading-7'>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our
                            <div  className='flex items-center underline'>
                            <span>privacy policy </span><span><FiArrowUpRight></FiArrowUpRight></span></div></p>
                               
                        </div>
                    </div>


                </div>
                <div className='grid grid-cols-3 gap-8 w-3/5'>
                    <div>
                        <p className='pb-4 border-b border-primary'>Orders and support</p>
                        <ul className='my-5 leading-9 text-sm'>
                            <li><Link>Contact us</Link></li>
                            <li className='flex items-center'><Link>FAQs</Link><span><FiArrowUpRight></FiArrowUpRight></span></li>
                            <li className='flex items-center'><Link>Shipping</Link><span><FiArrowUpRight></FiArrowUpRight></span></li>
                            <li className='flex items-center'><Link>Returns</Link><span><FiArrowUpRight></FiArrowUpRight></span></li>
                            <li ><Link>Order history</Link></li>
                            <li > <Link>Terms and conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='pb-4 border-b border-primary'>Services</p>
                        <ul className='my-5 leading-9 text-sm'>
                            <li><Link>Live assistance</Link></li>
                            <li><Link>Corporate gifts</Link></li>
                            <li><Link>Facial appointments</Link></li>
                            <li><Link>Click and Collect</Link></li>
                            <li><Link>Video consultation</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='pb-4 border-b border-primary'>Location preferences</p>
                        <ul className='my-5 leading-9 text-sm'>
                            <li><Link>Shipping:</Link></li>
                            <li><Link>Hong Kong SAR, China</Link></li>
                            <li><Link>Language</Link></li>
                            <li><Link>English</Link></li>
                            <li><Link>繁體中文</Link></li>
                            <li><Link>简体中文</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='flex text-primary my-12'>
                <div className='w-2/5 mr-8'>
                    <p className='pb-4 border-b border-primary'>Sustainability
                    </p>
                    <p className='my-5 text-sm leading-7'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div className='grid grid-cols-3 gap-8 w-3/5'>
                    <div>
                        <p className='pb-4 border-b border-primary'>About</p>
                        <ul className='my-5 leading-9 text-sm'>
                            <li><Link>Our story</Link></li>
                            <li><Link>Foundation</Link></li>
                            <li><Link>Careers</Link></li>
                            <li><Link>Privacy policy</Link></li>
                            <li><Link>Accessibility</Link></li>
                            <li><Link>Cookie Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='pb-4 border-b border-primary'>Social media</p>
                        <ul className='my-5 leading-9 text-sm'>
                            <li className='flex items-center'><Link>Instagram</Link><span><FiArrowUpRight></FiArrowUpRight></span></li>
                            <li className='flex items-center'><Link>Twitter</Link><span><FiArrowUpRight></FiArrowUpRight></span></li>
                            <li className='flex items-center'><Link>LinkedIn</Link><span><FiArrowUpRight></FiArrowUpRight></span></li>
                            <li><Link>WeChat</Link></li>
                            <li className='flex items-center'><Link>Weibo</Link><span><FiArrowUpRight></FiArrowUpRight></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-primary'>
                <p className='flex items-center pt-8 text-primary'><span className='mr-2'>&copy;</span> Aesop</p>
            </div>
        </div>
    );
};

export default Footer;