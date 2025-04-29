import React, { useState, useEffect, useContext } from 'react';
import { getJobApi } from '../Services/allApi';
import PostJob from './PostJob';
import { addJobContext } from '../Context/ContextApi';

const JobCards = ({ searchString }) => {
    const { addJobResponse, setAddJobResponse } = useContext(addJobContext)

    const [allJobs, setAllJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [category, setCategory] = useState("");

    const getAllJobs = async () => {
        try {
            const result = await getJobApi();
            if (result.status === 200) {
                setAllJobs(result.data);
            } else if (result.status === 404) {
                alert(result.response.data);
            }
        } catch (err) {
            console.error("Error fetching jobs:", err);
            alert("Error fetching jobs. Please try again.");
        }
    };

    // Fetch all jobs only once on component mount
    useEffect(() => {
        getAllJobs();
    }, [addJobResponse]);

    // Filter jobs based on search and category
    useEffect(() => {
        let filtered = allJobs;
        if (searchString) {
            filtered = filtered.filter(job =>
                job.title.toLowerCase().includes(searchString.toLowerCase()) ||
                job.company.toLowerCase().includes(searchString.toLowerCase()) ||
                job.description.toLowerCase().includes(searchString.toLowerCase())
            );
        }
        if (category) {
            filtered = filtered.filter(job => job.category === category);
        }
        setFilteredJobs(filtered);
    }, [searchString, category, allJobs]);

    return (
        <section id="jobs" className="p-6 bg-orange-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Job Listings</h2>
                <select onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md" >
                    <option value="">All Categories</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <PostJob />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => (
                        <div key={idx} className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
                            <div className="bg-green-50 p-6 relative">
                                <h3 className="text-2xl font-semibold mt-4">{job.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{job.company}</p>
                                <p className="text-sm text-gray-500">{job.category} • {job.location}</p>
                                <p className="text-sm text-gray-600 mt-3">{job.description}</p>
                            </div>
                            <div className="flex items-center justify-between px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">{job.title}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No jobs found.</p>
                )}
            </div>
        </section>
    );
};

export default JobCards;
