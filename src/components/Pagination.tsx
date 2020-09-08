import React from 'react';

type PaginationProps = {
  page: number;
  setPage: Function;
};

// Fix next page on last set of data
function Pagination({ page, setPage }: PaginationProps) {
  return (
    <div>
      <span
        style={{ display: page === 1 ? 'none' : 'inline' }}
        onClick={() => setPage((page: number) => page - 1)}
      >
        &lt; Prev
      </span>
      <span>{page}</span>
      <span onClick={() => setPage((page: number) => page + 1)}>Next &gt;</span>
    </div>
  );
}

export default Pagination;
