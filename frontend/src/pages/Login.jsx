import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllUserErrors, loginUser, } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);

    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <div className="bg-gray-50 min-h-screen py-5 mt-12">
      {/* Centered Container */}
      <div className="container mx-auto max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center underline">
          Login
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Role Selection */}

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

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-600"
            } transition`}
          >
            {loading ? "Loging in..." : "Login"}
          </button>
          
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
        If you are not registered,{' '}
        <Link to="/register" className="text-blue-500 hover:text-blue-700">
          click here to register
        </Link>.
      </p>
      </div>
    </div>
  );
};

export default Login;
