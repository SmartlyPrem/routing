import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../Context/Index';

const Header = () => {
    const { cart } = useContext(MainContext)

    return (
        <div className='shadow-lg p-3 mb-3 sticky top-0 bg-white z-[9]'>
            <nav className='mx-auto max-w-[1200px]'>
                <div className='flex gap-6 justify-between items-center'>
                    <div><img className='w-[50px]' src="../img/download.jpg" alt="" /></div>
                    <div className='font-bold text-slate-500'>
                        <Link to={"/"}>Home</Link>
                        <Link className='mx-5' to={"/cart"}>Cart <span>({cart?.length})</span></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
