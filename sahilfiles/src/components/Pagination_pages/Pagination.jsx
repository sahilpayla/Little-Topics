import styles from "./pagination.module.css";
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight
} from "react-icons/bs";


function Pagination({ page, setPage, totalPages, total, limit, setLimit }) {
  console.log("totalpage", totalPages);

  if (totalPages > 1) {
    return (
      <div className={styles.Paginate}>
        <div className={styles.left_side}>
          Items per page
          <div className={styles.items_per_page}>
            <select onChange={(e) => setLimit(e.target.value)}>
              <option value="1">1</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div className={styles.right_side}>
          {page !== 1 && (
            <button
              className={styles.PaginateButton}
              onClick={() => setPage(1)}
            >
              First
            </button>
          )}
          <button
            className={styles.PaginateButton}
            onClick={() => setPage(Math.max(page - 1, 1))}
          >
            <BsChevronLeft />
          </button>

          <span className={styles.PaginateNumber}>
            {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of{" "} {total}
          </span>
          <button
            className={styles.PaginateButton}
            onClick={() => setPage(Math.min(page + 1, totalPages))}
          >
            <BsChevronRight />
          </button>

          {page !== totalPages && (
            <button
              className={styles.PaginateButton}
              onClick={() => setPage(totalPages)}
            >
              Last
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pagination;
