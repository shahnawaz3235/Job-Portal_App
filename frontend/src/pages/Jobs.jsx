import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { fetchJobs, clearAllJobErrors } from "../store/slices/jobSlice";
import { Link } from "react-router-dom";

const Jobs = () => {
  const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", "Quetta", "Multan",
    "Faisalabad", "Sialkot", "Guangzhou", "Hyderabad", "Sukkur", "Gujranwala",
    "Bahawalpur", "Mardan", "Abbottabad", "Jhelum", "Rahim Yar Khan", "Chakwal",
    "Swat", "Mirpur", "Dera Ghazi Khan", "Nowshera", "Larkana", "Sargodha",
  ];

  const niches = [
    "Web Development", "Mobile App Development", "Data Science", "Artificial Intelligence (AI)",
    "Machine Learning (ML)", "Cloud Computing", "Cybersecurity", "Blockchain Development",
    "Software Development", "UI/UX Design", "DevOps Engineering", "Full Stack Development",
    "Game Development", "IT Project Management", "Digital Marketing", "Business Intelligence",
    "Database Administration", "QA Testing & Automation", "Networking", "IT Support",
    "Cloud Architecture", "Robotics", "Augmented Reality (AR)", "Virtual Reality (VR)",
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    dispatch(fetchJobs(selectedCity, selectedNiche, searchKeyword));
  }, [dispatch, error, selectedCity, selectedNiche, searchKeyword]);

  const handleSearch = () => {
    dispatch(fetchAllJobs(selectedCity, selectedNiche, searchKeyword));
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
     
      <div className="w-full lg:w-1/4 bg-white p-6 border-r border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Filters</h3>

        <div className="block lg:hidden space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">City</label>
            <select
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Niche</label>
            <select
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select Niche</option>
              {niches.map((niche) => (
                <option key={niche} value={niche}>
                  {niche}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="hidden lg:block">
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">Cities</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 rounded focus:ring-yellow-500"
                    checked={selectedCity === city}
                    onChange={() => setSelectedCity(city)}
                  />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Niches</h4>
            <ul className="space-y-2">
              {niches.map((niche) => (
                <li key={niche} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 rounded focus:ring-yellow-500"
                    checked={selectedNiche === niche}
                    onChange={() => setSelectedNiche(niche)}
                  />
                  <span>{niche}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      <div className="w-full lg:w-3/4 p-6">
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Search
          </button>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Job Listings</h3>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No jobs found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <li
                key={job._id}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800">{job.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{job.companyName}</p>
                  <p className="text-sm text-gray-600 mt-1">{job.location}</p>
                  <p className="text-sm text-gray-600 mt-1">Salary: {job.salery}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Posted On: {job.jobPostedOn.substring(0, 10)}
                  </p>
                  <p className="text-sm text-green-600 mt-2">
                    {job.hiringMultiCandidates === "Yes"
                      ? "Hiring Multiple Candidates"
                      : "Hiring"}
                  </p>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <Link
                    to={`/post/application/${job._id}`}
                    className="block text-center bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Apply Now
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Jobs;
