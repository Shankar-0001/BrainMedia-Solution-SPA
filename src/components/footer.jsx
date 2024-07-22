
export function Footer() {
    return (
        <div>
            <footer className="bg-white  hover:bg-gray-100 text-black py-4">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-lg font-bold">BM Solutions</h2>
                            <p className="text-sm">&copy; 2024 All Rights Reserved</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
                                <li>
                                    <a href="#contact" className="text-sm hover:underline">Contact Us</a>
                                </li>
                                <li>
                                    <a href="https://brainsmediasolutions.com/privacy-policy/" className="text-sm hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-4">
                            <a href="https://www.facebook.com/brainsmediasolutions" className="text-gray-500 hover:text-gray-700">
                                <span className="h-6 w-6 bi-facebook"></span>
                            </a>
                            <a href="https://www.linkedin.com/company/brains-media-solutions-pvt-ltd-/" className="text-gray-500 hover:text-gray-700">
                                <span className="h-6 w-6 bi-linkedin"></span>
                            </a>
                            <a href="https://www.instagram.com/Brains_Media_Solutions/" className="text-gray-500 hover:text-gray-700">
                                <span className="h-8 w-8 bi-instagram"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}