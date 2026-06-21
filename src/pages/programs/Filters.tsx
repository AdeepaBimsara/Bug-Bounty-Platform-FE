interface FiltersProps {
  filters: string[]
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export const Filters = ({
  filters,
  selectedFilter,
  onFilterChange,
}: FiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedFilter === filter
              ? 'bg-accent text-accent-foreground border border-accent'
              : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default Filters 
