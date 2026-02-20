import React from "react";
import useJobs from "../hooks/useJobs";
import JobCard from "./JobCard";

const JobGrid = ({jobs = [], loading, error}) => {

  if (loading) {
    return <div className="text-white bg-slate-900 min-h-96 flex justify-center pt-40 text-3xl ">Loading jobs...</div>;
  }
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  return (
    <div className="px-4 xl:px-40 bg-slate-900 text-white flex flex-col gap-5 py-8 min-h-96">
      <div className="flex m-auto">{jobs.length} jobs found</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>  
    </div>
  );
};

export default JobGrid;
