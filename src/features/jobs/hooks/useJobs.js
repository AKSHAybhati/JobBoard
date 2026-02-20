import React, { useEffect, useState } from "react";
import { fetchJobs } from "../../../services/jobApi";

const useJobs = (search, category) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const data = await fetchJobs(20, search, category);
        setJobs(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, [search, category]);
  return { jobs, loading, error };
};

export default useJobs;
