import React from "react";
import { useSavedJobs } from "../../../context/SavedJobsContext";
import { useNavigate } from "react-router-dom";
import JobCard from "../../jobs/components/JobCard";

const SavedJobList = () => {
  const { savedJobs, clearAllSavedJobs } = useSavedJobs();
  const navigate = useNavigate();

  if (savedJobs.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-4">
        <i className="bi bi-bookmark text-6xl text-gray-600"></i>
        <h2 className="text-2xl font-bold">No saved jobs yet</h2>
        <p className="text-gray-400">
          Start browsing and save jobs you're interested in
        </p>
        <button1
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Browse Jobs
        </button1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 xl:px-40 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Saved Jobs</h1>
          <p className="text-gray-400 mt-1">{savedJobs.length} jobs saved</p>
        </div>
        <button
          onClick={clearAllSavedJobs}
          className="px-4 py-2 border border-red-500 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default SavedJobList;
