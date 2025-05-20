import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearAllUpdateProfileErrors,
  updateProfile,
} from "../../store/slices/updateProfileSlice";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector(
    (state) => state.updateProfile
  );
  const niches = [
    "Web Development",
    "Mobile App Development",
    "Data Science",
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Cloud Computing",
    "Cybersecurity",
    "Blockchain Development",
    "Software Development",
    "UI/UX Design",
    "DevOps Engineering",
    "Full Stack Development",
    "Game Development",
    "IT Project Management",
    "Digital Marketing",
    "Business Intelligence",
    "Database Administration",
    "QA Testing & Automation",
    "Networking",
    "IT Support",
    "Cloud Architecture",
    "Robotics",
    "Augmented Reality (AR)",
    "Virtual Reality (VR)",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUserName] = useState(user && user.username);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [address, setAddress] = useState(user && user.address);
  const [coverLetter, setCoverLetter] = useState(user && user.coverLetter);
  const [firstNiche, setFirstNiche] = useState(user && user.niches?.firstNiche);
  const [secondNiche, setSecondNiche] = useState(
    user && user.niches?.secondNiche
  );
  const [thirdNiche, setThirdNiche] = useState(user && user.niches?.thirdNiche);
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(user && user.resume?.url);

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    if (user && user.role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
    }
    if (resume) {
      formData.append("resume", resume);
    }
    dispatch(updateProfile(formData));
  };

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdated) {
      toast.success("Profile Updated!");
      dispatch(getUser());
      dispatch(clearAllUpdateProfileErrors());
    }
  });
  return (
    <>
      <div className="max-w-2xl mx-auto bg-yellow-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">
          Update Profile
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {user.role === "Job Seeker" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Niche 1
                  </label>
                  <select
                    value={firstNiche}
                    onChange={(e) => setFirstNiche(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select Niche</option>
                    {niches.map((niche, idx) => (
                      <option key={idx} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Niche 2
                  </label>
                  <select
                    value={secondNiche}
                    onChange={(e) => setSecondNiche(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select Niche</option>
                    {niches.map((niche, idx) => (
                      <option key={idx} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Niche 3
                  </label>
                  <select
                    value={thirdNiche}
                    onChange={(e) => setThirdNiche(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select Niche</option>
                    {niches.map((niche, idx) => (
                      <option key={idx} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cover Letter
                </label>
                <textarea
                  type="textarea"
                  name="coverLetter"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  value={resume}
                  onChange={resumeHandler}
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {user && user.resume && (
                  <div>
                    <p>Current Resume</p>
                    <Link
                      to={user.resume && user.resume.url}
                      target="_blank"
                      className="view-resume"
                    >
                      View Resume
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
                <div className="save_change_btn_wrapper">
        <button
          className="btn"
          onClick={handleUpdateProfile}
          disabled={loading}
        >
          {" "}
          Save Changes
        </button>
      </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
