import { Link } from "react-router-dom";
import { Footer } from "./footer";
import { About } from "./about";
import { Services } from "./services";
import './styles/home.css';
import { Contact } from "./contact";


export function Home() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='card mt-1 border-0 '>
                    <div className='row  py-20 bg-sky-700 shadow-2xl'>
                        <div className='col-md-4 hover:shadow-md bg-sky-600 rounded-full'>
                            <img src='hero-girl.png' alt='Not Available' className='img-fluid' />
                        </div>
                        <div className='home-cont col-md-8'>
                            <div className='card-body'>
                                <h2 className='card-title text-start mb-4 fs-1 font-exotrabold text-white '>Get your business online in less than 24 hours</h2>
                                <p className='card-text text-center font-medium text-white'>If your business is not on Social Media, then you are out of the competition.</p>

                                <div className='p-3'>
                                    <button className='btn btn-primary'>
                                        <Link to='/contact' className='text-decoration-none text-black font-extrabold p-2 shadow-xl '>Quick Start</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <section className="services py-20">
                <div className="heading py-10">
                    <h2>Digital Marketing Services Under One Roof</h2>
                </div>
                <div className="services-content">
                    <div className="services-box">
                        <span className='bi bi-collection rounded-full p-0 m-0'></span>
                        <h3>Social Media Posts</h3>
                        <div className='btn btn-primary'>
                            <Link to='' className='text-decoration-none'>GO</Link>
                        </div>
                    </div>
                    <div className="services-box">
                        <span className='bi bi-pc-display-horizontal rounded-full p-0 m-0'></span>
                        <h3>Website Designing</h3>
                        <div className='btn btn-primary'>
                            <Link to='' className='text-decoration-none'>GO</Link>
                        </div>
                    </div>
                    <div className="services-box ">
                        <span className='bi bi-pencil-square rounded-full p-0 m-0'></span>
                        <h3>Content Marketing</h3>
                        <div className='btn btn-primary'>
                            <Link to='' className='text-decoration-none'>GO</Link>
                        </div>
                    </div>
                    <div className="services-box">
                        <span className='bi bi-window-sidebar rounded-full p-0 m-0 '></span>
                        <h3>PPC</h3>
                        <div className='btn btn-primary'>
                            <Link to='' className='text-decoration-none'>GO</Link>
                        </div>
                    </div>
                    <div className="services-box">
                        <span className='bi bi-search rounded-full p-0 m-0 '></span>
                        <h3>SEO</h3>
                        <div className='btn btn-primary'>
                            <Link to='' className='text-decoration-none'>GO</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <About />
            </div>

            <div>
                <Services />
            </div>

            <div>
                <Contact />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}