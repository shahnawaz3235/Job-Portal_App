import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllUserErrors, registerUser } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// Reusable InputField Component
const InputField = ({ label, type, value, onChange, className }) => {
  return (
    <div className="form-group flex flex-col">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={type === "password" ? "new-password" : "off"}
        className={`w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 transition-all ${className}`}
      />
    </div>
  );
};

// Reusable Button Component
const Button = ({ children, className, ...props }) => (
  <button
    className={`transition-all hover:scale-105 focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Register = () => {
  const [role, setRole] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

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

  const { loading, isAuthenticated, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!role) {
      toast.error("Please select a role!");
      return;
    }

    const formData = new FormData();
    formData.append("role", role);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);

    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      if (resume) {
        formData.append("resume", resume);
      }
    }

    dispatch(registerUser(formData));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-28">
      {/* Centered Container */}
      <div className="container mx-auto max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Role Selection using Select Dropdown */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Role</option>
              <option value="Job Seeker">Job Seeker</option>
              <option value="Employer">Employer</option>
            </select>
          </div>

          {/* Input Fields in One Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField
              label="Name"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="sm:col-span-1"
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:col-span-1"
            />
            <InputField
              label="Phone"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="sm:col-span-1"
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="sm:col-span-1"
            />
            <InputField
              label="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="sm:col-span-1"
            />
          </div>

          {/* Job Seeker Specific Fields */}
          {role === "Job Seeker" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Niche 1</label>
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
                  <label className="block text-gray-600 font-medium mb-2">Niche 2</label>
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
                  <label className="block text-gray-600 font-medium mb-2">Niche 3</label>
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
                <label className="block text-gray-600 font-medium mb-2">Cover Letter</label>
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Write a cover letter..."
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2">Resume</label>
                <input
                  type="file"
                  onChange={(e) => setResume(e.target.files[0])}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition-all"
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          If you are registered,{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            click here to login
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default Register;
