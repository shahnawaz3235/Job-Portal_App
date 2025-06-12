import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearAllApplicationErrors,
  resetApplicationSlice,
  deleteApplication,
  fetchJobSeekerApplications,
} from "../../store/slices/applicationSlice";
import Spinner from "../Spinner";

const MyApplications = () => {
  const { loading, error, applications, message } = useSelector(
    (state) => state.applications
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobSeekerApplications());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetApplicationSlice());
      dispatch(fetchJobSeekerApplications());
    }
  }, [dispatch, error, message]);

  const handleDeleteApplication = (id) => {
    dispatch(deleteApplication(id));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {loading ? (
        <Spinner />
      ) : applications && applications.length <= 0 ? (
        <h1 className="text-xl font-medium text-gray-500 text-center mt-20">
          You have not applied for any jobs yet.
        </h1>
      ) : (
        <>
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            My Applications
          </h3>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {applications.map((element) => (
              <div
                key={element._id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  {element.jobInfo.jobTitle}
                </h4>
                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {element.jobSeekerInfo.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {element.jobSeekerInfo.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {element.jobSeekerInfo.phone}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span>{" "}
                    {element.jobSeekerInfo.address}
                  </p>
                  <div>
                    <p className="font-medium mb-1">Cover Letter:</p>
                    <div className="text-gray-700 text-sm bg-gray-100 p-3 rounded-md border border-gray-200 whitespace-pre-line">
                      {element.jobSeekerInfo.coverLetter}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 space-x-3">
                  <button
                    onClick={() => handleDeleteApplication(element._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    Delete
                  </button>
                  <Link
                    to={element.jobSeekerInfo?.resume?.url}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    target="_blank"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyApplications;
