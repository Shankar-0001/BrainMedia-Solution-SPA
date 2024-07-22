import './styles/about.css';
import { Link } from "react-router-dom"
export function About() {
    return (
        <div>
            <div>
                <div className='container-fluid'>
                    <div className="heading ">
                        <h2>Know About US</h2>
                    </div>
                    <div className='card mt-1 border-0 '>
                        <div className='row  py-20'>
                            <div className='col-md-6 shadow-md bg-white rounded'>
                                <img src='hero-girl.png' alt='Not Available' className='img-fluid' />
                            </div>
                            <div className='col-md-6'>
                                <div className='card-body '>
                                    <div className="text-start p-3">
                                        <h5 className='card-title text-start mb-4 fs-3 font-exotrabold '>Our Story</h5>
                                        <p className='card-text text-start font-medium fs-5'>Build trust, grow brand.</p>


                                        <p>Brains Media Solutions Pvt. Ltd is a full-service Digital Marketing Agency based in Belgaum, Karnataka, India. Our journey began in 2008, and since then, we have evolved and adapted to the dynamic landscape of the digital marketing industry.</p>



                                        <p>Brains Media Solutions Pvt. Ltd is a full-service Digital Marketing Agency based in Belgaum, Karnataka, India. Our journey began in 2008, and since then, we have evolved and adapted to the dynamic landscape of the digital marketing industry.</p>



                                        <p>As a full-service digital marketing company, we offer various services to help businesses thrive online. Our affordable digital marketing services are curated to capture new leads and convert them into profitable customers. Our digital marketing services list include: </p>

                                        <div className="text-start p-3">
                                            <ol>
                                                <li className="text-start p-1">Content marketing</li>
                                                <li className="text-start p-1">Social media marketing (SMM)</li>
                                                <li className="text-start p-1">Search engine optimization (SEO)</li>
                                                <li className="text-start p-1">Web design and development </li>
                                                <li className="text-start p-1">Pay-per-click (PPC) advertising</li>
                                            </ol>
                                        </div>

                                        <p>Whether you are a small local business or a large enterprise, we are here to be your trusted partner in increasing your digital presence and taking your online success to new heights. </p>

                                        <h4>Contact us today, and let’s embark on a journey towards digital excellence! </h4>
                                    </div>
                                    <div className='p-3'>
                                        <button className='btn btn-primary'>
                                            <Link to='/contact' className='text-decoration-none text-black font-extrabold p-2 shadow-xl '>Quick Start</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                
                <div className='promis bg-gray-100 '>
                    <div className='cardBox m-3 hover:bg-blue-300 '>
                        <div className='cardImage'>
                            <img src='mission.png' alt='not available' className='imageBox img-fluid' />
                        </div>
                        <div className="cardBody">
                            <div className="title">
                                <h3 className="text-center">Our Vision</h3>
                            </div>
                            <p className="text-justify">To be the leading digital marketing company that delivers innovative and effective solutions to help our clients achieve their business goals and create sustainable value.</p>
                        </div>
                    </div>

                    <div className='cardBox m-3 hover:bg-blue-300'>
                        <div className='cardImage'>
                            <img src='mission3.jpg' alt='not available' className='imageBox' />
                        </div>

                        <div className="cardBody">
                            <div className="title">
                                <h3 className="text-center">Our Mission</h3>
                            </div>
                            <p className="text-justify">Our mission is to empower businesses of all sizes to grow and succeed in the digital age by providing them with cutting-edge digital marketing solutions that increase their online presence, improve their customer engagement, and drive conversions and revenue.</p>
                        </div>
                    </div>

                    <div className='cardBox m-3 hover:bg-blue-300'>
                        <div className='cardImage'>
                            <img src='value1.png' alt='not available' className='imageBox img-fluid' />
                        </div>

                        <div className="cardBody">
                            <div className="title">
                                <h3 className="text-center">Our Values</h3>
                            </div>
                            <p className="text-justify">To pursue excellence through dedicated teamwork, integrity, and a commitment to our clients' success. We strive to create a positive and supportive work environment that fosters innovation, creativity, and professional growth for our employees.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

