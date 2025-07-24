import {} from 'react';
import Navbar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
export default function Gallery() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
            <Navbar />
            <div className="min-h-screen max-w-7xl mx-auto p-4">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mt-20 mb-16">
                    Gallery
                </h1>
                <p className="text-lg text-gray-700 mb-8 translate-y-50 text-center">
                    Comming Soon
                </p>
            </div>
            <Footer />
        </div>
    )
};