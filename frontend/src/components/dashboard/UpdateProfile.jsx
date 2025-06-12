import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearAllUpdateProfileErrors,
  updateProfile,
} from "../../store/slices/updateProfileSlice";
import { getUser } from "../../store/slices/userSlice";
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

  const [username, setUserName] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [coverLetter, setCoverLetter] = useState(user?.coverLetter);
  const [firstNiche, setFirstNiche] = useState(user?.niches?.firstNiche);
  const [secondNiche, setSecondNiche] = useState(user?.niches?.secondNiche);
  const [thirdNiche, setThirdNiche] = useState(user?.niches?.thirdNiche);
  const [resume, setResume] = useState(null);

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);

    if (user?.role === "Job Seeker") {
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
    setResume(file);
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
  }, [error, isUpdated, dispatch]);

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mt-8">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        Update Profile
      </h2>
      <form className="space-y-6 text-gray-700 text-[15px]">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
          />
        </div>

        {/* Job Seeker Fields */}
        {user?.role === "Job Seeker" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Niche 1 */}
              <div>
                <label className="block mb-1 font-medium">Niche 1</label>
                <select
                  value={firstNiche}
                  onChange={(e) => setFirstNiche(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
                >
                  <option value="">Select Niche</option>
                  {niches.map((niche, idx) => (
                    <option key={idx} value={niche}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>

              {/* Niche 2 */}
              <div>
                <label className="block mb-1 font-medium">Niche 2</label>
                <select
                  value={secondNiche}
                  onChange={(e) => setSecondNiche(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
                >
                  <option value="">Select Niche</option>
                  {niches.map((niche, idx) => (
                    <option key={idx} value={niche}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>

              {/* Niche 3 */}
              <div>
                <label className="block mb-1 font-medium">Niche 3</label>
                <select
                  value={thirdNiche}
                  onChange={(e) => setThirdNiche(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
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

            {/* Cover Letter */}
            <div>
              <label className="block mb-1 font-medium">Cover Letter</label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900 min-h-[100px]"
              />
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block mb-1 font-medium">Upload Resume</label>
              <input
                type="file"
                name="resume"
                onChange={resumeHandler}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-gray-900"
              />
              {user?.resume?.url && (
                <div className="mt-2 text-sm text-blue-600">
                  <Link
                    to={user.resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    View Current Resume
                  </Link>
                </div>
              )}
            </div>
          </>
        )}

        {/* Save Button */}
        <div>
          <button
            type="button"
            onClick={handleUpdateProfile}
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
