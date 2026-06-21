'use client'

import { useState } from 'react'
import { Search, ChevronDown, Shield, Target, Users, Clock, Zap } from 'lucide-react'
import BrowseProgramsHeader from '../programs/Header'
import BrowseProgramsFilters from '../programs/Filters'
import ProgramCard from '../programs/ProgramCards'
import ProgramPagination from '../programs/Pagination'
import Sidebar from '../dashboard/researcher_dashboard/Sidebar'

const mockPrograms = [
  {
    id: 1,
    name: 'Google Security Program',
    company: 'Google',
    logo: '🔍',
    status: 'Active',
    bountyMax: '$133,337',
    vulnerabilitiesFound: 4891,
    researchersCount: 2154,
    lastUpdated: '2 hours ago',
    tags: ['Web', 'API', 'Cloud'],
  },
  {
    id: 2,
    name: 'Meta Bug Bounty',
    company: 'Meta',
    logo: 'f',
    status: 'Active',
    bountyMax: '$50,000',
    vulnerabilitiesFound: 3247,
    researchersCount: 1876,
    lastUpdated: '4 hours ago',
    tags: ['Web', 'Mobile', 'API'],
  },
  {
    id: 3,
    name: 'Microsoft Security',
    company: 'Microsoft',
    logo: '⬜',
    status: 'Active',
    bountyMax: '$20,000',
    vulnerabilitiesFound: 2156,
    researchersCount: 987,
    lastUpdated: '6 hours ago',
    tags: ['Web', 'Cloud', 'API'],
  },
  {
    id: 4,
    name: 'Amazon Security Program',
    company: 'Amazon',
    logo: '🔶',
    status: 'Active',
    bountyMax: '$50,000',
    vulnerabilitiesFound: 1843,
    researchersCount: 1234,
    lastUpdated: '1 day ago',
    tags: ['Cloud', 'API', 'Infrastructure'],
  },
  {
    id: 5,
    name: 'Apple Security Research',
    company: 'Apple',
    logo: '🍎',
    status: 'Active',
    bountyMax: '$200,000',
    vulnerabilitiesFound: 987,
    researchersCount: 654,
    lastUpdated: '3 days ago',
    tags: ['Mobile', 'Web', 'Hardware'],
  },
  {
    id: 6,
    name: 'GitHub Bug Bounty',
    company: 'GitHub',
    logo: '🐙',
    status: 'Active',
    bountyMax: '$35,000',
    vulnerabilitiesFound: 432,
    researchersCount: 456,
    lastUpdated: '5 days ago',
    tags: ['Web', 'API'],
  },
  {
    id: 7,
    name: 'Stripe Security Program',
    company: 'Stripe',
    logo: '⚡',
    status: 'Active',
    bountyMax: '$30,000',
    vulnerabilitiesFound: 876,
    researchersCount: 789,
    lastUpdated: '1 week ago',
    tags: ['API', 'Web'],
  },
  {
    id: 8,
    name: 'Airbnb Security',
    company: 'Airbnb',
    logo: '🏠',
    status: 'Active',
    bountyMax: '$25,000',
    vulnerabilitiesFound: 654,
    researchersCount: 567,
    lastUpdated: '1 week ago',
    tags: ['Web', 'Mobile'],
  },
]

export const BrowserProgram = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [sortBy, setSortBy] = useState('Most Popular')
  const [currentPage, setCurrentPage] = useState(1)

  const filters = ['All', 'Web', 'API', 'Mobile', 'Cloud']
  const sortOptions = ['Most Popular', 'Highest Reward', 'Newest', 'Most Active']

  // Filter programs based on search and category
  let filteredPrograms = mockPrograms.filter((program) => {
    const matchesSearch =
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.company.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      selectedFilter === 'All' || program.tags.includes(selectedFilter)

    return matchesSearch && matchesFilter
  })

  // Sort programs
  if (sortBy === 'Highest Reward') {
    filteredPrograms.sort(
      (a, b) =>
        parseInt(b.bountyMax.replace(/[$,]/g, '')) -
        parseInt(a.bountyMax.replace(/[$,]/g, ''))
    )
  } else if (sortBy === 'Most Active') {
    filteredPrograms.sort((a, b) => b.researchersCount - a.researchersCount)
  }

  // Pagination
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const displayedPrograms = filteredPrograms.slice(
    startIdx,
    startIdx + itemsPerPage
  )

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-slate-950 to-cyan-950/30 text-white">
        <Sidebar/>
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <BrowseProgramsHeader />

          <div className="px-6 py-8 max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-10">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search programs by name or company..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full bg-card border border-border rounded-lg pl-12 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                />
              </div>
            </div>

            {/* Filters and Sort */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <BrowseProgramsFilters
                filters={filters}
                selectedFilter={selectedFilter}
                onFilterChange={(filter) => {
                  setSelectedFilter(filter)
                  setCurrentPage(1)
                }}
              />

              {/* Sort Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-card border border-border rounded-lg px-4 py-2 pr-10 text-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Programs Grid */}
            {displayedPrograms.length > 0 ? (
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
            )}

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
  )
}

export default BrowserProgram
