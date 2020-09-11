import React from 'react';

type PaginationProps = {
  page: number;
  setPage: Function;
  showNextPage?: boolean;
};

function Pagination({ page, setPage, showNextPage = true }: PaginationProps) {
  return (
    <div className="py-3 text-center cursor-pointer text-black hover:text-gray-800">
      <span
        className={page === 1 ? 'hidden' : 'inline'}
        onClick={() => setPage((page: number) => page - 1)}
      >
        &lt; Prev
      </span>

      {showNextPage && (
        <span
          className="mx-2"
          onClick={() => setPage((page: number) => page + 1)}
        >
          Next &gt;
        </span>
      )}
    </div>
  );
}

export default Pagination;
