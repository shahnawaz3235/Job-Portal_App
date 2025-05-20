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
  }, []);

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
    <div className="p-6 bg-yellow-50 min-h-screen">
      {loading ? (
        <Spinner />
      ) : applications && applications.length <= 0 ? (
        <h1 className="text-xl font-semibold text-gray-700">
          You have not applied for any job.
        </h1>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-yellow-600 mb-6">
            My Applications
          </h3>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {applications.map((element) => (
              <div
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                key={element._id}
              >
                <h4 className="text-lg font-bold text-gray-700 mb-4">
                  {element.jobInfo.jobTitle}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Name: </span>
                  {element.jobSeekerInfo.name}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email: </span>
                  {element.jobSeekerInfo.email}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Phone: </span>
                  {element.jobSeekerInfo.phone}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Address: </span>
                  {element.jobSeekerInfo.address}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Cover Letter:</span>
                  <textarea
                    value={element.jobSeekerInfo.coverLetter}
                    rows={3}
                    disabled
                    className="mt-2 w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                  ></textarea>
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleDeleteApplication(element._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all duration-300"
                  >
                    Delete
                  </button>
                  <Link
                    to={element.jobSeekerInfo?.resume?.url}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition-all duration-300"
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
