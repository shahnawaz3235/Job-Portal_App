import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllUserErrors, logoutUser } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { LuMoveRight } from "react-icons/lu";
import MyProfile from "../components/dashboard/MyProfile";
import UpdateProfile from "../components/dashboard/UpdateProfile";
import UpdatePassword from "../components/dashboard/UpdatePassword";
import MyJobs from "../components/dashboard/MyJobs";
import Applications from "../components/dashboard/Applications";
import MyApplications from "../components/dashboard/MyApplications";
import JobPost from "../components/dashboard/JobPost";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [componentName, setComponentName] = useState("");
  const { loading, isAuthenticated, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logoutUser());
      toast.success("User Logged Out successfully!");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, loading]);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          show ? "w-60" : "w-20"
        } bg-yellow-600 transition-all duration-300 h-full text-white`}
      >
        <div className="p-4 text-2xl font-semibold">{show ? "Dashboard" : "D"}</div>
        <div className="p-4">
          <p>{greeting()},</p>
          <p className="font-bold">{user && user.username}</p>
        </div>
        <ul className="space-y-4 mt-8">
          {[
            { name: "My Profile", component: "My Profile" },
            { name: "Update Profile", component: "Update Profile" },
            { name: "Update Password", component: "Update Password" },
            user.role === "Employer" && { name: "Post New Job", component: "Job Post" },
            user.role === "Employer" && { name: "My Jobs", component: "My Jobs" },
           user.role === "Job Seeker" && { name: "My Applications", component: "My Applications" },
           user.role === "Employer" && { name: "Applications", component: "Applications" },

          ]
            .filter(Boolean)
            .map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setComponentName(item.component)}
                  className={`w-full text-left py-2 px-4 rounded-md ${
                    componentName === item.component
                      ? "bg-yellow-500"
                      : "hover:bg-yellow-500"
                  } transition-all duration-300`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          <li>
            <button
              onClick={handleLogout}
              className="w-full text-left py-2 px-4 rounded-md bg-red-500 hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <div
            className={`cursor-pointer transition-transform duration-300 ${
              show ? "rotate-180" : ""
            }`}
            onClick={() => setShow(!show)}
          >
            <LuMoveRight className="text-yellow-600 text-3xl" />
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          {componentName ? (
            (() => {
              switch (componentName) {
                case "My Profile":
                  return <MyProfile />;
                  case "Update Profile":
                    return <UpdateProfile />;
                case "Update Password":
                  return <UpdatePassword />;
                case "Job Post":
                  return <JobPost />;
                case "My Jobs":
                  return <MyJobs />;
                case "Applications":
                  return <Applications />;
                case "My Applications":
                  return <MyApplications />;
                default:
                  return null;
              }
            })()
          ) : (
            <p className="text-center text-gray-600">Select an option from the menu.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
