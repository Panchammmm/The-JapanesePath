import { useMemo } from "react";

type Props = {
  page: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  showLimit?: boolean;
};

const SmartPagination = ({
  page,
  total,
  limit,
  onPageChange,
  onLimitChange,
  showLimit = true,
}: Props) => {
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  const pages = useMemo(() => {
    const list: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) list.push(i);
    } else {
      list.push(1);

      if (page > 3) list.push("...");

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) list.push(i);

      if (page < totalPages - 2) list.push("...");

      list.push(totalPages);
    }

    return list;
  }, [page, totalPages]);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-10">

      {/* Results */}
      <div className="text-sm text-muted-foreground">
        {start}-{end} of {total}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2 flex-wrap">

        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded-md text-sm hover:bg-muted disabled:opacity-40"
        >
          ‹ Back
        </button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span key={i} className="px-2 text-muted-foreground">
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => onPageChange(p)}
              className={`w-8 h-8 text-sm rounded-full border ${
                page === p
                  ? "bg-primary text-white border-primary"
                  : "hover:bg-muted"
              }`}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded-md text-sm hover:bg-muted disabled:opacity-40"
        >
          Next ›
        </button>

      </div>

      {/* Limit */}
      {showLimit && onLimitChange && (
        <div className="flex items-center gap-2 text-sm">
          Result per page
          <select
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
            className="border rounded-md px-2 py-1 cursor-pointer"
          >
            <option value={9}>9</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default SmartPagination;