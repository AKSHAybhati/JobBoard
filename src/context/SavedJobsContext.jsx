  import { createContext, useContext, useEffect, useState } from "react";

  const SavedJobContext = createContext();

  export const SavedJobProvider = ({ children }) => {
    
    const [savedJobs, setSavedJobs] = useState(()=>{
      try{
      const stored = localStorage.getItem("savedJobs");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.log("Invalid LocalStorage data:", error)
      return [];
    }
    });

    useEffect(() => {
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    }, [savedJobs]);

    const toggleSaveJob = (job) => {
      setSavedJobs((prev) => {
        const isAlreadySaved = prev.some((saved) => saved.id === job.id);
        if (isAlreadySaved) {
          return prev.filter((saved) => saved.id !== job.id);
        } else {
          return [...prev, job];
        }
      });
    };

    const isJobSaved = (JobId) => {
      return savedJobs.some((job) => job.id === JobId);
    };

    const clearAllSavedJobs = () => {
      setSavedJobs([]);
    };

    return (
      <SavedJobContext.Provider
        value={{ savedJobs, toggleSaveJob, isJobSaved, clearAllSavedJobs,savedCount: savedJobs.length  }}
      >
        {children}
      </SavedJobContext.Provider>
    );
  };

  export const useSavedJobs = () => {
    const context = useContext(SavedJobContext);
    if (!context) {
      throw new Error("useSavedJobs must be used within a SavedJobProvider");
    }
    return context;
  };
