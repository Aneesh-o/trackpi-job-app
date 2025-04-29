import React, { useContext, useState } from 'react';
import { addJobApi } from '../Services/allApi';
import { addJobContext } from '../Context/ContextApi';

const PostJob = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [jobData, setJobData] = useState({
        title: '', company: '', category: '', location: '', description: '',
    });

    const {addJobResponse,setAddJobResponse} = useContext(addJobContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, company, category, location, description } = jobData;
        if (title && company && category && location && description) {
            try {
                const result = await addJobApi(jobData);
                if (result.status === 200) {
                    alert("Job posted successfully");
                    setAddJobResponse(result)
                    setIsOpen(false);
                    setJobData({ title: '', company: '', category: '', location: '', description: '' });
                } else {
                    alert(result.response?.data || "Error posting job");
                    setJobData({ title: '', company: '', category: '', location: '', description: '' });
                }
            } catch (err) {
                alert("Server error: " + err.message);
            }
        } else {
            alert("Please fill the form completely");
        }
    };

    return (
        <div>
            {/* Open Modal Button */}
            <button onClick={() => setIsOpen(true)} className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">+</button>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 mx-4 relative">
                        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Post a New Job</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="title" placeholder="Job Title" value={jobData.title} onChange={(e) => setJobData({ ...jobData, title: e.target.value })} required className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="text" name="company" placeholder="Company Name" value={jobData.company} onChange={(e) => setJobData({ ...jobData, company: e.target.value })} required className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <select name="category" value={jobData.category} onChange={(e) => setJobData({ ...jobData, category: e.target.value })} required className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
                                <option value="">Select Category</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                            <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={(e) => setJobData({ ...jobData, location: e.target.value })} required className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <textarea name="description" placeholder="Job Description" value={jobData.description} onChange={(e) => setJobData({ ...jobData, description: e.target.value })} required className="w-full border p-3 rounded-lg min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100" > Cancel </button>
                                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700" >
                                    Post Job
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostJob;
