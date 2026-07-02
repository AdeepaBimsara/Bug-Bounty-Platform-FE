import { useEffect, useState } from "react";
import { Search, ChevronDown, Shield } from "lucide-react";
import BrowseProgramsHeader from "../programs/Header";
import BrowseProgramsFilters from "../programs/Filters";
import ProgramCard from "../programs/ProgramCards";
import ProgramPagination from "../programs/Pagination";
import Sidebar from "../dashboard/researcher_dashboard/Sidebar";
// import mockPrograms from "./data/Programs";
import { browsePrograms, getMyPrograms } from "../../services/program";

export const BrowserProgram = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    const data = await browsePrograms();
    setPrograms(data);
  };

  const filters = ["All", "Web", "API", "Mobile", "Cloud"];
  const sortOptions = [
    "Most Popular",
    "Highest Reward",
    "Newest",
    "Most Active",
  ];

  // Filter programs based on search and category
  let filteredPrograms = programs.filter((program: any) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.fullName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" ||
      program.type === selectedFilter.toLocaleUpperCase();

    return matchesSearch && matchesFilter;
  });

  // Sort programs
  if (sortBy === "Highest Reward") {
    filteredPrograms.sort((a: any, b: any) => a.rewardMax - b.rewardMax);
  } else if (sortBy === "Most Active") {
    // filteredPrograms.sort((a, b) => b.researchersCount - a.researchersCount);
  }

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const displayedPrograms = filteredPrograms.slice(
    startIdx,
    startIdx + itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-linear-to-br  from-black via-slate-900 to-indigo-950 text-white">
      <Sidebar />
      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-y-auto">
        <BrowseProgramsHeader />

        <div className="px-6 py-8 max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-10">
            <div
              className="
  relative group
"
            >
              <div
                className="
    absolute inset-0
    rounded-2xl
    bg-cyan-400/10
    blur-xl
    opacity-0
    group-focus-within:opacity-100
    transition-all
  "
              />

              <Search
                className="
      absolute
      left-5
      top-1/2
      -translate-y-1/2
      h-5
      w-5
      text-cyan-400
      group-focus-within:scale-110
      transition-transform
    "
              />

              <input
                type="text"
                placeholder="Search programs by name or company..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="
      relative
      w-full

      bg-slate-900/60
      backdrop-blur-xl

      border
      border-cyan-400/20

      rounded-2xl

      pl-14
      pr-5
      py-4

      text-white

      placeholder:text-slate-500

      outline-none

      transition-all
      duration-300

      focus:border-cyan-400/70

      focus:ring-2
      focus:ring-cyan-400/20

      hover:border-cyan-400/40

      shadow-lg
      shadow-black/20
    "
              />
            </div>
          </div>

          {/* Filters and Sort */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <BrowseProgramsFilters
              filters={filters}
              selectedFilter={selectedFilter}
              onFilterChange={(filter) => {
                setSelectedFilter(filter);
                setCurrentPage(1);
              }}
            />

            {/* Sort Dropdown */}
            <div
              className="
  relative
  w-full
  sm:w-auto
  group
"
            >
              {/* Glow */}

              <div
                className="
    absolute
    inset-0
    rounded-xl
    bg-cyan-400/10
    blur-xl
    opacity-0
    group-focus-within:opacity-100
    transition-all
  "
              />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="
      relative

      appearance-none

      w-full
      sm:w-56

      cursor-pointer

      rounded-xl

      bg-slate-900/70
      backdrop-blur-xl

      border
      border-cyan-400/20

      px-5
      py-3
      pr-12

      text-white
      text-sm
      font-medium

      outline-none

      transition-all
      duration-300

      hover:border-cyan-400/50

      focus:border-cyan-400

      focus:ring-2
      focus:ring-cyan-400/20

      shadow-lg
      shadow-black/20
    "
              >
                {sortOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="
          bg-slate-900
          text-white
        "
                  >
                    {option}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="
      absolute
      right-4
      top-1/2
      -translate-y-1/2

      h-5
      w-5

      text-cyan-400

      pointer-events-none

      group-hover:translate-y-[-40%]

      transition-all
    "
              />
            </div>
          </div>

          {/* Programs Grid */}
          {/* {displayedPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">
                No programs found matching your search criteria.
              </p>
            </div>
          )} */}
          <div>
            {displayedPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {displayedPrograms.map((program: any) => (
                  <ProgramCard key={program._id} program={program} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-lg">
                  No programs found matching your search criteria.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <ProgramPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default BrowserProgram;
