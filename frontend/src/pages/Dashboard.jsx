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
  const [show, setShow] = useState(false); // Sidebar closed by default in mobile
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
    <section className="flex min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Mobile Sidebar Backdrop */}
      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setShow(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          show ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static top-0 left-0 w-64 h-full bg-indigo-600/90 text-white z-40 transition-transform duration-300 shadow-md`}
      >
        <div className="p-4 flex justify-between items-center md:block">
          <div className="text-2xl font-bold tracking-wide">{show ? "Dashboard" : "D"}</div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setShow(false)}
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm">{greeting()},</p>
          <p className="font-semibold">{user && user.username}</p>
        </div>
        <ul className="space-y-3 mt-8 text-sm px-4">
          {[{ name: "My Profile", component: "My Profile" },
            { name: "Update Profile", component: "Update Profile" },
            { name: "Update Password", component: "Update Password" },
            user.role === "Employer" && { name: "Post New Job", component: "Job Post" },
            user.role === "Employer" && { name: "My Jobs", component: "My Jobs" },
            user.role === "Job Seeker" && { name: "My Applications", component: "My Applications" },
            user.role === "Employer" && { name: "Applications", component: "Applications" }]
            .filter(Boolean)
            .map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    setComponentName(item.component);
                    // Auto close sidebar on small screen
                    if (window.innerWidth < 768) setShow(false);
                  }}
                  className={`w-full text-left py-2 px-4 rounded-md ${
                    componentName === item.component
                      ? "bg-indigo-500 text-white"
                      : "hover:bg-indigo-500 hover:text-white"
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
      <div className="flex-1 p-4 md:p-6 max-w-7xl mx-auto">
        {/* Mobile toggle button */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <button
            onClick={() => setShow(true)}
            className="text-indigo-600 text-3xl"
          >
            &#9776;
          </button>
        </div>

        {/* Desktop toggle button */}
        <div className="hidden md:flex justify-between items-center mb-4">
          <div
            className={`cursor-pointer transition-transform duration-300 ${
              show ? "rotate-180" : ""
            }`}
            onClick={() => setShow(!show)}
          >
            <LuMoveRight className="text-indigo-600 text-3xl hover:scale-110 transition-transform" />
          </div>
        </div>

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
            <p className="text-center text-gray-500">Select an option from the menu.</p>
          )}
       
      </div>
    </section>
  );
};

export default Dashboard;
