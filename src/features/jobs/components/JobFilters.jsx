import React, { useState } from "react";

const JobFilters = ({ search, setSearch, onCategoryChange }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
    onCategoryChange(category);
  }
  
  const categoryOptions = ["All Categories", "Software Development", "Design", "Marketing", "Customer Service","Project Management","AI / ML","Finance","Human Resources","Writing","Medical"];
  return (
    <div className="bg-gray-800 h-96 md:h-72 flex flex-col justify-center items-center gap-2">
      <div className="first text-5xl font-bold text-white flex flex-col sm:flex-row gap-1 sm:gap-4 text-center">
        <div className="text">Find your next</div>
        <div className="text-blue-600 ">startup job</div>
      </div>
      <div className="first text-gray-400 text-lg text-center">
        Discover roles at the world's most innovative companies
      </div>
      <div className="first flex flex-col md:flex-row gap-1.5 items-center mt-2 md:mt-10">
        <div className="flex gap-5 text-gray-400 border-2 px-3 py-2 rounded-md border-gray-500 w-60 sm:w-96">
          <div className="icon">
            <i class="bi bi-search"></i>
          </div>
          <input
            placeholder="Search job titles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 focus:outline-none w-full"
          ></input>
        </div>
        <div className="relative">
          <div
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex gap-2 text-white border-2 px-3 py-2 rounded-md border-gray-500 cursor-pointer"
          >
            <div className="All Categories">{selectedCategory || "All Categories"}</div>
            <i class="bi bi-chevron-compact-down"></i>
          </div>
          {isCategoryOpen && (
            <div className="absolute top-34 bg-gray-800 text-white rounded-md p-4 w-52 border-2 border-gray-500">
              {categoryOptions.map((category)=>(
                <div key={category} onClick={()=> handleCategorySelect(category)} className="py-1 hover:bg-gray-700 rounded-md px-2 cursor-pointer">
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default JobFilters;
