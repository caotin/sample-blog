import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
export default function Pagination({ filter }) {
  const { total = 46, order = "asc", page = 1, limit = 10 } = filter;
  const numPages = Math.round(total / limit);

  const history = useHistory();
  const handleClick = (index, label) => {
    let p = index;
    if (label === "prev" && index > 1) p--;
    if (label === "next" && index < numPages) p++;

    history.push(`/?page=${p}&order=${order}` + (filter.search ? `&search=${filter.search}` : ""));
  };

  return (
    <nav aria-label="" className="pt-2">
      <ul className="pagination">
        <li className={"page-item " + (+page <= 1 ? "disabled" : "")}>
          <button className="page-link" onClick={() => handleClick(page, "prev")}>
            Previous
          </button>
        </li>
        {Array(numPages)
          .fill(null)
          .map((_, index) => (
            <li key={index} className={"page-item " + (+page === index + 1 ? "active" : "")}>
              <button className="page-link" onClick={() => handleClick(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        <li className={"page-item " + (+page >= numPages ? "disabled" : "")}>
          <button className="page-link" onClick={() => handleClick(page, "next")}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  filter: PropTypes.object.isRequired
};
