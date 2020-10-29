import React from 'react';

type PaginationProps = {
  page: number;
  setPage: Function;
  showNextPage?: boolean;
};

function Pagination({ page, setPage, showNextPage = true }: PaginationProps) {
  const nextPage = (
    <button
      className={`focus:outline-none mx-2 ${!showNextPage && 'text-white'}`}
      disabled={!showNextPage}
      onClick={() => setPage((page: number) => page + 1)}
    >
      &gt;
    </button>
  );

  return (
    <div className="py-3 text-center text-2xl font-bold cursor-pointer text-black hover:text-gray-800">
      <button
        disabled={page <= 1}
        className={`focus:outline-none ${page <= 1 ? 'text-white' : ''}`}
        onClick={() => setPage((page: number) => page - 1)}
      >
        &lt;
      </button>

      {nextPage}
    </div>
  );
}

export default Pagination;
