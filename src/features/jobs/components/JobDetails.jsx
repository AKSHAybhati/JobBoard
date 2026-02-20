import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Job not found</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" px-8 xl:px-52 py-8 bg-slate-800 text-white min-h-screen flex flex-col gap-5">
      <div className="heading flex justify-between items-center text-2xl font-bold">
        <div className="title">Job Details</div>
        <i
          onClick={() => navigate("/")}
          className="bi bi-x-lg hover:cursor-pointer"
        ></i>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 sm:w-16 sm:h-16  bg-slate-700 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
          {job.company_name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-xl sm:text-3xl font-bold leading-tight">
            {job.title}
          </h3>
          <p className="text-gray-400 text-lg">{job.company_name} </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-5">
        <span className="px-5 py-2 bg-slate-700 rounded-full text-base sm:text-xl text-gray-300 flex items-center gap-1">
          <i className="bi bi-geo-alt"></i>
          {job.candidate_required_location}
        </span>

        {job.salary && (
          <span className="px-5 py-2 bg-emerald-900/30 text-emerald-400 rounded-full text-base sm:text-xl flex items-center gap-1">
            <i className="bi bi-currency-dollar"></i>
            {job.salary}
          </span>
        )}

        <span className="px-5 py-2 bg-blue-900/30 text-blue-400 rounded-full text-base sm:text-xl capitalize">
          {job.job_type.replace("_", " ")}
        </span>
      </div>
      <div className="category flex flex-col gap-2 border border-gray-700 p-5 rounded-md">
        <div className="tit text-xl text-gray-500">Category</div>
        <div className="tit text-lg">{job.category}</div>
      </div>
      <div className="description border border-gray-700 p-5 rounded-md flex flex-col gap-3">
        <div className="text-xl text-gray-500">Description</div>
        <div
          className="text-gray-300 leading-relaxed prose prose-invert prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />
      </div>
    </div>
  );
};

export default JobDetails;
