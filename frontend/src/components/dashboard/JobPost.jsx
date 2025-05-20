import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAllJobErrors,
  postJob,
  resetJobSlice,
} from "../../store/slices/jobSlice";

const JobPost = () => {
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [offers, setOffers] = useState("");
  const [jobNiche, setJobNiche] = useState("");
  const [salery, setSalery] = useState(""); // Changed from salary to salery
  const [hiringMultiCandidates, setHiringMultiCandidates] = useState(""); // Changed name
  const [personalWebsiteTitle, setPersonalWebsiteTitle] = useState("");
  const [personalWebsiteUrl, setPersonalWebsiteUrl] = useState("");

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
  ];

  const { loading, error, message } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const handlePostJob = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("jobType", jobType);
    formData.append("location", location);
    formData.append("companyName", companyName);
    formData.append("introduction", introduction);
    formData.append("responsibilities", responsibilities);
    formData.append("qualifications", qualifications);
    formData.append("offers", offers);
    formData.append("jobNiche", jobNiche);
    formData.append("salery", salery); // Changed from salary to salery
    formData.append("hiringMultiCandidates", hiringMultiCandidates); // Changed name
    formData.append("personalWebsiteTitle", personalWebsiteTitle);
    formData.append("personalWebsiteUrl", personalWebsiteUrl);
    console.log(formData);
    dispatch(postJob(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
    }
  }, [dispatch, error, message]);

  return (
    <div className="bg-yellow-50 p-8 min-h-screen">
      <h3 className="text-2xl font-bold text-yellow-600 mb-6">Post A Job</h3>
      <form className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Job Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Job Title"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Salary</label>
          <input
            type="text"
            value={salery} // Changed from salary to salery
            onChange={(e) => setSalery(e.target.value)}
            placeholder="Salary"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Introduction</label>
          <textarea
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            placeholder="Introduction"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Responsibilities</label>
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            placeholder="Responsibilities"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Qualifications</label>
          <textarea
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            placeholder="Qualifications"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Additional Offers</label>
          <input
            type="text"
            value={offers}
            onChange={(e) => setOffers(e.target.value)}
            placeholder="Additional Offers"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Hiring Multiple Candidates
          </label>
          <select
            value={hiringMultiCandidates} // Changed name
            onChange={(e) => setHiringMultiCandidates(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Job Niche</label>
          <select
            value={jobNiche}
            onChange={(e) => setJobNiche(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Select Job Niche</option>
            {nichesArray.map((niche, idx) => (
              <option key={idx} value={niche}>
                {niche}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Personal Website Title</label>
          <input
            type="text"
            value={personalWebsiteTitle}
            onChange={(e) => setPersonalWebsiteTitle(e.target.value)}
            placeholder="Personal Website Title"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Personal Website URL</label>
          <input
            type="text"
            value={personalWebsiteUrl}
            onChange={(e) => setPersonalWebsiteUrl(e.target.value)}
            placeholder="Personal Website URL"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          type="button"
          onClick={handlePostJob}
          disabled={loading}
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-md transition-all duration-300"
        >
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

export default JobPost;
