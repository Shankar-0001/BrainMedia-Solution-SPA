import './styles/menu.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="menubar sticky top-0 bg-white shadow-sm hover:bg-gray-100 text-black">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to='/' className='text-decoration-none'><p className=" fs-4 text-2xl text-black font-bold">BM Solutions</p></Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-reset text-decoration-none ">Home</Link>
                            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-reset text-decoration-none">About Us</Link>
                            {/* <Link to="/mission" className="px-3 py-2 rounded-md text-sm font-medium text-reset text-decoration-none">Mission</Link> */}
                            {/* <Link to="/vision" className="px-3 py-2 rounded-md text-sm font-medium text-reset text-decoration-none">Vision</Link> */}
                            <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium text-reset text-decoration-none">Services</Link>
                            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-reset text-decoration-none">Contact</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-black">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-reset text-decoration-none">Home</Link>
                    <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-reset text-decoration-none">About Us</Link>
                    {/* <Link to="/mission" className="block px-3 py-2 rounded-md text-base font-medium text-reset text-decoration-none">Mission</Link>
                    <Link to="/vision" className="block px-3 py-2 rounded-md text-base font-medium text-reset text-decoration-none">Vision</Link> */}
                    <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-reset text-decoration-none">Services</Link>
                    <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-reset text-decoration-none">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

