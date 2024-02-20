import { DOTS, usePagination } from "../hooks/usePagination.jsx";

const classnames = () => {
  return "";
};
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex">
      <ul className="s-pagination">
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className="dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={index}
              className={pageNumber === currentPage ? "selected" : ""}
              onClick={
                pageNumber === currentPage
                  ? () => {}
                  : () => onPageChange(pageNumber)
              }
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
