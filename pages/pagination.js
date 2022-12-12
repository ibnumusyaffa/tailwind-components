import React, { useState } from "react";
import Pagination from "../components/Pagination";
function Page() {
  const [page, setPage] = useState(1);
  return (
    <div className="p-5">
      <Pagination
        page={page}
        onChange={(page) => setPage(page)}
        siblings={1}
        
        total={100}
      ></Pagination>
    </div>
  );
}

export default Page;
