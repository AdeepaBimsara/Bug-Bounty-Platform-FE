interface FiltersProps {
  filters: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export const Filters = ({
  filters,
  selectedFilter,
  onFilterChange,
}: FiltersProps) => {
  return (
    <div
      className="
  flex
  flex-wrap
  gap-3
"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`

        px-5
        py-2.5

        rounded-full

        text-sm
        font-semibold

        transition-all
        duration-300

        border

        ${
          selectedFilter === filter
            ? `
          bg-gradient-to-r
          from-cyan-400
          to-blue-500

          text-black

          border-cyan-400

          shadow-lg
          shadow-cyan-400/30

          scale-105
          `
            : `
          bg-slate-900/60

          backdrop-blur-xl

          border-cyan-400/20

          text-slate-400

          hover:text-cyan-300

          hover:border-cyan-400/50

          hover:bg-cyan-400/10

          hover:-translate-y-0.5
          `
        }

      `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
