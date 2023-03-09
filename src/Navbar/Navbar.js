import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
         <div className='flex text-secondary p-6 font-bold '>
            <div className='flex items-center w-4/5 '>
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
            <div className='w-1/5'>
                <div>
                <Link className='m-3'>Log in</Link>
                <Link className='m-3'>Cabinet</Link>
                <Link className='m-3'>Cart</Link>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';


// const Navbar = () => {



//     const menuItems = <React.Fragment>
//         <li><Link className='m-2'>Skin Care</Link></li>
//         <li><Link className='m-2'>Body & Hand</Link></li>
//         <li><Link className='m-2'>Hair</Link></li>
//         <li><Link className='m-2'>Fragrance</Link></li>
//         <li><Link className='m-2'>Home</Link></li>
//         <li><Link className='m-2'>Kits & Travel</Link></li>
//         <li><Link className='m-2'>Gifts</Link></li>
//         <li><Link className='m-2'>Read</Link></li>
//         <li><Link className='m-2'>Stores</Link></li>
//         <li><Link><FaSearch className='text-gray-600'></FaSearch></Link></li>
//     </React.Fragment>
//     return (
//         <div className="navbar">
//             <div className="navbar-start hidden lg:flex">
//                 <ul className=" menu-horizontal p-0 font-bold text-secondary">
//                     {menuItems}
//                 </ul>
//             </div>
//             <div className="navbar-end text-secondary font-bold">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={1} className="bg-white menu menu-compact dropdown-content mt-3 p-2 shadow text-primary rounded-box w-52">
//                         {menuItems}
//                     </ul>
//                 </div>
//                 <Link className='m-3'>Log in</Link>
//                 <Link className='m-3' >Cabinet</Link>
//                 <Link className='m-3'>Cart</Link>
//             </div>
            

//         </div>
//     );
// };

// export default Navbar;