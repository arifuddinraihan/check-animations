import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='shadow-lg sticky top-0 z-50'>
            <div className="navbar bg-cyan-400 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to={'/home'}>Homepage</Link>
                            </li>
                            <li>
                                <Link to={'/shop'}>Shop</Link>
                            </li>
                            <li>
                                <Link to={'/cart'}>Cart</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to={'/home'} className="gap-2 btn btn-ghost normal-case text-md md:text-xl">
                        <p>Check</p>
                        <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
                        <p>Animation</p>
                    </Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <Link to={'/cart'}>
                                <p>Cart</p>
                            </Link>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;