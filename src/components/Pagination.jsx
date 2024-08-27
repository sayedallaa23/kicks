import React from "react";

import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.innerWidth < 700
  );

  return (
    <div className="pagination">
        <button onClick={()=>{
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        }} className={`paginatoin-btn ${currentPage==1?"is-dark":""}`}
        style={totalPosts==0?{display:"none"}:null}>{isMobile?"<":"Previous"}</button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button onClick={()=>{
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
      }}className={`paginatoin-btn ${currentPage===pages.length?"is-dark":""}`}
      style={totalPosts==0?{display:"none"}:null}>{isMobile?">":"Next"}</button>
    </div>
  );
};

export default Pagination;
