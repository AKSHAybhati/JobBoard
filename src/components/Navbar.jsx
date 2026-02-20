import React from "react";
import { useSavedJobs } from "../context/SavedJobsContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { savedCount} = useSavedJobs();
  return (
    <div className="h-16 bg-slate-900 text-white px-4 xl:px-40 flex justify-between items-center sticky top-0 z-10">
      <div className="left flex text-2xl font-mono items-center">
        <div className="l px-2 py-0.5 bg-blue-400 rounded-lg mr-2 text-lg font-sans font-bold">
          J
        </div>
        <div className="l">Jobs</div>
        <div className="l text-blue-700">Board</div>
      </div>
      <div
        className="left flex gap-2 bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
        onClick={() => navigate("/saved")}
      >
        <div className="icon">
          <i class="bi bi-bookmark text-base"></i>
        </div>
        <div className="hidden lg:block">Saved Jobs</div>
        {savedCount > 0 && (
          <div className="count text-base bg-blue-500 text-white rounded-full h-6 w-6 text-center font-bold">
            {savedCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
