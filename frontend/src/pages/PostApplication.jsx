import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  postApplication,
  clearAllApplicationErrors,
  resetApplicationSlice,
} from '../store/slices/applicationSlice';
import InputField from '../components/InputField';
import Button from '../components/Button';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSingleJob } from '../store/slices/jobSlice';

const PostApplication = () => {
  const { singleJob } = useSelector((state) => state.jobs);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector((state) => state.applications);
  
  const { jobId } = useParams();

  const [name, setName] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [address, setAddress] = useState(user?.address || '');
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetApplicationSlice());
    }
    if ((user?.role === 'Employer') || !isAuthenticated) {
      navigate('/');
    }
    dispatch(fetchSingleJob(jobId));
  }, [dispatch, error, message, jobId, user, isAuthenticated, navigate]);

  const handlePostApplication = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('coverLetter', coverLetter);
    if (resume) {
      formData.append('resume', resume);
    }
    dispatch(postApplication(formData, jobId));
  };

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-yellow-600 mb-6">Job Application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handlePostApplication} className="space-y-4">
            <InputField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Phone"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputField
              label="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                rows="5"
                placeholder="Write a cover letter..."
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
              <input
                type="file"
                name="resume"
                onChange={resumeHandler}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-yellow-100"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md">
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>

        {/* Job Details Section */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-yellow-600 mb-4">Job Details</h3>
          {!singleJob ? (
            <p>Loading job details...</p>
          ) : (
            <>
              <div className="job-info mb-4">
                <h4 className="font-semibold text-gray-700">{singleJob.title}</h4>
                {singleJob.personalWebsites && (
                  <a
                    href={singleJob.personalWebsites.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {singleJob.personalWebsites.title}
                  </a>
                )}
                <p>{singleJob.location}</p>
                <p>Rs. {singleJob.salery} a month</p>
                <hr />
              </div>
              <div className="job-info mb-4">
                <h4 className="font-semibold text-gray-700">Qualifications</h4>
                <ul className="list-disc list-inside">
                  {singleJob.qualifications?.split('. ').map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="job-info mb-4">
                <h4 className="font-semibold text-gray-700">Responsibilities</h4>
                <ul className="list-disc list-inside">
                  {singleJob.responsibilities?.split('. ').map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="job-info">
                <h4 className="font-semibold text-gray-700">Offerings</h4>
                <ul className="list-disc list-inside">
                  {singleJob.offers?.split('. ').map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostApplication;
