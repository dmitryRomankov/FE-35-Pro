import { Link } from "react-router-dom";
import "./styles.scss";

type PaginationProps = {
  countOfPages: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
};

export const Pagination = ({
  countOfPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pageNumbers = Array.from({ length: countOfPages }, (_, idx) => idx + 1);

  const nextPage = () => {
    if (currentPage !== countOfPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="navigation">
      <div className="navigation__list">
        <Link
          className="navigation__button"
          onClick={prevPage}
          to={
            currentPage === 1
              ? `?page=${currentPage}`
              : `?page=${currentPage - 1}`
          }
        >
          Previous
        </Link>

        {pageNumbers.map((pageNum) => (
          <Link
            to={`?page=${pageNum}`}
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={
              pageNum === currentPage
                ? "navigation__button navigation__button--active"
                : "navigation__button"
            }
          >
            {pageNum}
          </Link>
        ))}

        <Link
          className="navigation__button"
          to={
            currentPage === countOfPages
              ? `?page=${currentPage}`
              : `?page=${currentPage + 1}`
          }
          onClick={nextPage}
        >
          Next
        </Link>
      </div>
    </div>
  );
};
