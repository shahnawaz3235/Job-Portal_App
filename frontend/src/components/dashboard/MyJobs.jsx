import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAllJobErrors,
  deleteJob,
  getMyJobs,
  resetJobSlice,
} from "../../store/slices/jobSlice";
import Spinner from "../Spinner";

const MyJobs = () => {
  const { loading, error, myJobs, message } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
    }
    dispatch(getMyJobs());
  }, [dispatch, error, message]);

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  return (
    <div className="bg-yellow-50 min-h-screen p-8">
      {loading ? (
        <Spinner />
      ) : myJobs && myJobs.length <= 0 ? (
        <h1 className="text-lg font-semibold text-yellow-600 text-center">
          You have not posted any job!
        </h1>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-yellow-600 mb-6">My Jobs</h3>
          <div className="grid grid-cols-1 gap-6">
            {myJobs.map((job) => (
              <div
                className="p-6 bg-white rounded-lg shadow-md border border-yellow-200"
                key={job._id}
              >
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">Job Title:</span>{" "}
                  {job.title}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">Job Niche:</span>{" "}
                  {job.jobNiche}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">Salary:</span>{" "}
                  {job.salary}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">Location:</span>{" "}
                  {job.location}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">Job Type:</span>{" "}
                  {job.jobType}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">Company Name:</span>{" "}
                  {job.companyName}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Introduction:
                  </span>{" "}
                  {job.introduction}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Qualifications:
                  </span>{" "}
                  {job.qualifications}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-yellow-600">
                    Responsibilities:
                  </span>{" "}
                  {job.responsibilities}
                </p>
                {job.offers && (
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-yellow-600">
                      What Are We Offering:
                    </span>{" "}
                    {job.offers}
                  </p>
                )}
                <button
                  onClick={() => handleDeleteJob(job._id)}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
                >
                  Delete Job
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyJobs;
