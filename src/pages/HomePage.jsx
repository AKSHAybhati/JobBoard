import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import JobFilters from "../features/jobs/components/JobFilters";
import JobGrid from "../features/jobs/components/JobGrid";
import useJobs from "../features/jobs/hooks/useJobs";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const { jobs, loading, error } = useJobs(search, selectedCategory === "All Categories" ? "" : selectedCategory);
  return (
    <>
      <MainLayout>
        <JobFilters search={search} setSearch={setSearch} onCategoryChange={setSelectedCategory} />
        <JobGrid jobs={jobs} loading={loading} error={error} />
      </MainLayout>
    </>
  );
};

export default HomePage;
