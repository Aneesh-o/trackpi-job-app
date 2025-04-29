import React, { useState } from 'react'
import Header from '../Components/Header'
import JobCards from '../Components/JobCards'
import Footer from '../Components/Footer'

const Home = () => {
    const [searchString,setSearchString] = useState("")

    console.log(searchString);
    
    return (
        <>
            <Header />
            <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24 px-6 text-center overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto h-60">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Find Your <span className="text-yellow-300">Dream Job</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-6">
                        Discover opportunities by job title or company name.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input onChange={e=>setSearchString(e.target.value)} type="text" placeholder="Search jobs..." className="w-full sm:w-80 px-4 py-3 rounded-md bg-white text-black placeholder-gray-400 border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300" />
                        {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md transition">Search</button> */}
                    </div>
                </div>
            </section>
            <JobCards searchString={searchString} />
            <Footer />
        </>
    )
}

export default Home