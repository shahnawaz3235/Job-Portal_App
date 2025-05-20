import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAllApplicationErrors,
  deleteApplication,
  fetchEmployerApplications,
  resetApplicationSlice,
} from "../../store/slices/applicationSlice";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const Applications = () => {
  const { applications, loading, error, message } = useSelector(
    (state) => state.applications
  );

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
    dispatch(fetchEmployerApplications());
  }, [dispatch, error, message]);

  const handleDeleteApplication = (id) => {
    dispatch(deleteApplication(id));
  };

  return (
    <div className="bg-yellow-50 min-h-screen p-8">
      {loading ? (
        <Spinner />
      ) : applications && applications.length <= 0 ? (
        <h1 className="text-lg font-semibold text-yellow-600 text-center">
          You have no applications from job seekers.
        </h1>
      ) : (
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-yellow-600 mb-6">
            Applications For Your Posted Jobs
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {applications.map((application) => (
              <div
                className="p-6 bg-white rounded-lg shadow-md border border-yellow-200"
                key={application._id}
              >
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Job Title:
                  </span>{" "}
                  {application.jobInfo.jobTitle}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Applicant's Name:
                  </span>{" "}
                  {application.jobSeekerInfo.name}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Applicant's Email:
                  </span>{" "}
                  {application.jobSeekerInfo.email}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Applicant's Phone:
                  </span>{" "}
                  {application.jobSeekerInfo.phone}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Applicant's Address:
                  </span>{" "}
                  {application.jobSeekerInfo.address}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold text-yellow-600">
                    Applicant's Cover Letter:
                  </span>
                  <textarea
                    value={application.jobSeekerInfo.coverLetter}
                    className="w-full mt-2 bg-yellow-50 border border-yellow-200 rounded-md p-2 text-gray-600"
                    rows={5}
                    disabled
                  ></textarea>
                </p>
                <div className="flex space-x-4 mt-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
                    onClick={() => handleDeleteApplication(application._id)}
                  >
                    Delete Application
                  </button>
                  <Link
                    to={
                      application.jobSeekerInfo &&
                      application.jobSeekerInfo.resume.url
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
                    target="_blank"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
