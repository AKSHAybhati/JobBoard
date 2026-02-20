import { useNavigate } from "react-router-dom";
import { useSavedJobs } from "../../../context/SavedJobsContext";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const {toggleSaveJob, isJobSaved} = useSavedJobs();

  const isSaved = isJobSaved(job.id);

  const handleViewDetails = () => {
    navigate(`/job/${job.id}`, { state: { job } });
  };

  return (
    <div className="bg-slate-800 rounded-lg p-3 sm:p-6 flex flex-col gap-3 hover:bg-slate-700">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold">
            {job.company_name.charAt(0)}
          </div>

          <div className="flex flex-col">
            <h3 className="text-white text-lg font-bold leading-tight">
              {job.title}
            </h3>
            <p className="text-gray-400 text-sm">{job.company_name}</p>
          </div>
        </div>

        <button className="p-2 hover:bg-slate-600 rounded-lg" onClick={() => toggleSaveJob(job)}>
          <i className={`bi ${isSaved ? 'bi-bookmark-fill text-blue-400' : 'bi-bookmark text-gray-400'} text-lg`}></i>
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-300 flex items-center gap-1">
          <i className="bi bi-geo-alt"></i>
          {job.candidate_required_location}
        </span>

        {job.salary && (
          <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm flex items-center gap-1">
            <i className="bi bi-currency-dollar"></i>
            {job.salary}
          </span>
        )}

        <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm capitalize">
          {job.job_type.replace("_", " ")}
        </span>
      </div>

      <p className="text-sm text-gray-500">{job.category}</p>

      <div className="flex gap-3 sm:mt-2">
        <button
          onClick={handleViewDetails}
          className="flex-1 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
