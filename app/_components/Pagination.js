"use client";

// import React from "react";

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <nav>
//       <ul className="pagination">
//         {pages.map((page) => (
//           <li key={page} className={currentPage === page ? "active" : ""}>
//             <button onClick={() => onPageChange(page)}>{page}</button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const PAGE_SIZE = 10;

function Pagination({ count }) {
  //   const [searchParams, setSearchParams] = useSearchParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page");
  // params.set("page, next");

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", next);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", prev);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  if (pageCount <= 1) return null;

  return (
    <div>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          <ArrowLeftIcon h="3" w="3" /> <span>Previous</span>
        </button>

        <button onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Next</span> <ArrowRightIcon h="3" w="3" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
