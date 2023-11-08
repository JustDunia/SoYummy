import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import icons from "../../images/commonSvgImg/icons.svg";

export const Pagination = () => {
  const [pageCount, setPageCount] = useState(5);

  const updatePageCount = () => {
    if (window.innerWidth >= 1280) {
      setPageCount(8);
    } else {
      setPageCount(5);
    }
  };

  useEffect(() => {
    updatePageCount();
    window.addEventListener("resize", updatePageCount);
    return () => {
      window.removeEventListener("resize", updatePageCount);
    };
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <span key={pageNumber} className={styles.pageNumber}>
        {pageNumber}
      </span>
    ));
  };

  return (
    <div className={styles.pagination}>
      <svg className={styles.icon} viewBox="0 0 12 12">
        <use href={`${icons}#icon-pagination-arrow-left`} />
      </svg>
      {renderPageNumbers()}
      <svg className={styles.icon} viewBox="0 0 12 12">
        <use href={`${icons}#icon-pagination-arrow-right`} />
      </svg>
    </div>
  );
};
