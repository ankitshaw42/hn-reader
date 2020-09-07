import React, { useState } from 'react';

function Pagination() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <span onClick={() => setPage((page) => page - 1)}>&lt; Prev</span>
      <span>{page}</span>
      <span onClick={() => setPage((page) => page + 1)}>Next &gt;</span>
    </div>
  );
}

export default Pagination;
