import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.slice(
    Math.max(0, currentPage - 2),
    Math.min(totalPages, currentPage + 2),
  );

  return (
    <div
      className="
  flex
  items-center
  justify-center
  gap-3
  mt-10
"
    >
      {/* Previous */}

      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="
      h-11
      w-11
      flex
      items-center
      justify-center

      rounded-xl

      bg-slate-900/60
      backdrop-blur-xl

      border
      border-cyan-400/20

      text-cyan-300

      hover:bg-cyan-400/10
      hover:border-cyan-400/50

      disabled:opacity-30
      disabled:cursor-not-allowed

      transition-all
      duration-300

      hover:-translate-y-1

      shadow-lg
      shadow-black/20
    "
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Pages */}

      <div
        className="
    flex
    gap-2
    bg-slate-900/40
    backdrop-blur-xl
    border
    border-cyan-400/10
    rounded-2xl
    p-2
  "
      >
        {visiblePages[0] > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="
            h-10
            w-10
            rounded-xl

            border
            border-cyan-400/20

            text-slate-400

            hover:text-cyan-300
            hover:bg-cyan-400/10

            transition-all
          "
            >
              1
            </button>

            {visiblePages[0] > 2 && (
              <span
                className="
            px-2
            flex
            items-center
            text-cyan-400
          "
              >
                ...
              </span>
            )}
          </>
        )}

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`

          h-10
          w-10
          rounded-xl
          font-bold
          transition-all
          duration-300

          ${
            currentPage === page
              ? `
            bg-gradient-to-r
            from-cyan-400
            to-blue-500

            text-black

            shadow-lg
            shadow-cyan-400/30

            scale-110
            `
              : `
            text-slate-400

            border
            border-cyan-400/20

            hover:text-cyan-300
            hover:bg-cyan-400/10

            `
          }

        `}
          >
            {page}
          </button>
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span
                className="
            px-2
            flex
            items-center
            text-cyan-400
          "
              >
                ...
              </span>
            )}

            <button
              onClick={() => onPageChange(totalPages)}
              className="
            h-10
            w-10
            rounded-xl

            border
            border-cyan-400/20

            text-slate-400

            hover:text-cyan-300
            hover:bg-cyan-400/10

            transition-all
          "
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      {/* Next */}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="
      h-11
      w-11
      flex
      items-center
      justify-center

      rounded-xl

      bg-slate-900/60
      backdrop-blur-xl

      border
      border-cyan-400/20

      text-cyan-300

      hover:bg-cyan-400/10
      hover:border-cyan-400/50

      disabled:opacity-30
      disabled:cursor-not-allowed

      transition-all
      duration-300

      hover:-translate-y-1

      shadow-lg
      shadow-black/20
    "
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;
