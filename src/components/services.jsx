
import { Link } from "react-router-dom"
import './styles/services.css';
export function Services() {
    return (
        <div className='container-fluid'>
                <div className="heading py-10">
                    <h1>Our Services</h1>
                </div>
            <div className='card mt-1 border-0 '>
                <div className='row  py-20 shadow-md'>
                    <div className='col-md-4 hover:shadow-md '>
                        <img src='b3.png' alt='Not Available' className='img-fluid' />
                    </div>
                    <div className='home-cont col-md-8'>
                        <div className='card-body'>
                            <div className="heading">
                                <h4>Overview</h4>
                            </div>
                            {/* <h2 className='card-title text-center mb-4 fs-1 font-exotrabold'>OVERVIEW</h2> */}
                            <p className='card-text font-medium text-justify'>Brains Media Solutions is the number one digital marketing service provider, located near Hubli, Karnataka. We are known for delivering exceptional quality and efficient work to our clients and increasing their online presence across all social media platforms, such as Facebook, Instagram, and LinkedIn.</p>
                            <p className='card-text text-justify font-medium'>As one of the most experienced digital marketing service providers, we plan and execute various digital marketing strategies like Website Designing, Search Engine Optimization (SEO), Google Ads, Social Media Marketing, etc., for our clients. Our extensive experience has made us one of the best digital marketing agencies in Belgaum, India. We have a team of professional digital marketers, content writers, and creative designers who work dedicatedly to deliver impeccable results within specified timelines..</p>
                            <div className='p-3'>
                                <button className='btn btn-primary'>
                                    <Link to='/contact' className='text-decoration-none text-black font-extrabold p-2 shadow-xl '>Quick Start</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           
            <div className='py-20'>
                <div className="heading py-10">
                    <h2>Read Our Latest Blog Posts, News & Articles</h2>
                </div>
                <div className="card-group p-4 m-4 ">
                    <div className="card  me-4 rounded hover:shadow-2xl hover:bg-cyan-500 ">
                        <img src="b4.jpg" className="card-img-top img-fluid" alt="Not Available"  />
                        <div className="card-body">
                            <h5 className="card-title text-justify">Website Designing</h5>
                            <p className="card-text text-justify overflow-hidden">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="p-2">
                            <button className=' btn btn-primary'>
                                <Link to='' className='text-decoration-none text-black font-extrabold p-2 shadow-xl'>Click Me</Link>
                            </button>
                        </div>
                    </div>
                    <div className="card me-4 rounded hover:shadow-2xl hover:bg-cyan-500">
                        <img src="b1.jpg" className="card-img-top img-fluid" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title text-justify">Important Points For Digital Marketing</h5>
                            <p className="card-text text-justify">TThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="p-2">
                            <button className=' btn btn-primary'>
                                <Link to='' className='text-decoration-none text-black font-extrabold p-2 shadow-xl'>Click Me</Link>
                            </button>
                        </div>
                    </div>
                    <div className="card me-4 rounded hover:shadow-2xl hover:bg-cyan-500">
                        <img src="b2.webp" className="card-img-top img-fluid" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title text-justify">Pay Per Click Advertising: Powerful Strategy for..</h5>
                            <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="p-2">
                            <button className=' btn btn-primary'>
                                <Link to='' className='text-decoration-none text-black font-extrabold p-2 shadow-xl'>Click Me</Link>
                            </button>
                        </div>
                    </div>

                    <div className="card me-4 rounded hover:shadow-2xl hover:bg-cyan-500">
                        <img src="bo.jpg" className="card-img-top img-fluid" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title text-justify">The Significance of Social Media Marketing for..</h5>
                            <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="p-2">
                            <button className=' btn btn-primary'>
                                <Link to='' className='text-decoration-none text-black font-extrabold p-2 shadow-xl'>Click Me</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}