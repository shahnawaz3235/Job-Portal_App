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
  const { loading, error, myjobs, message } = useSelector(
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

  const renderText = (text) =>
    typeof text === "string" && text.trim() !== "" ? text : "N/A";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {loading ? (
        <Spinner />
      ) : myjobs && myjobs.length <= 0 ? (
        <h1 className="text-xl font-medium text-gray-500 text-center mt-20">
          You have not posted any jobs yet.
        </h1>
      ) : (
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            My Jobs
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {myjobs.map((job) => (
              <div
                key={job._id}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-700 text-sm">
                  <div>
                    <p className="font-semibold text-gray-500 mb-1">Job Title</p>
                    <p>{renderText(job.title)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-1">Job Niche</p>
                    <p>{renderText(job.jobNiche)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-1">Salary</p>
                    <p>{renderText(job.salary)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-1">Location</p>
                    <p>{renderText(job.location)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-1">Job Type</p>
                    <p>{renderText(job.jobType)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-1">Company Name</p>
                    <p>{renderText(job.companyName)}</p>
                  </div>
                </div>

                <div className="space-y-2 text-gray-700 text-sm border-t border-gray-100 pt-4">
                  <p>
                    <span className="font-semibold text-gray-500">
                      Introduction:
                    </span>{" "}
                    {renderText(job.introduction)}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-500">
                      Qualifications:
                    </span>{" "}
                    {renderText(job.qualifications)}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-500">
                      Responsibilities:
                    </span>{" "}
                    {renderText(job.responsibilities)}
                  </p>
                  {job.offers &&
                    typeof job.offers === "string" &&
                    job.offers.trim() !== "" && (
                      <p>
                        <span className="font-semibold text-gray-500">
                          What Are We Offering:
                        </span>{" "}
                        {job.offers}
                      </p>
                    )}
                </div>

                <button
                  onClick={() => handleDeleteJob(job._id)}
                  className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
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
