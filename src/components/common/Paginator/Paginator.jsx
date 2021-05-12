import React, { useState } from "react";
import styles from "./Paginator.module.css";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 5,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator_box}>
      {portionNumber > 1 && (
        <div
          className={`${styles.page_button} ${styles.prev_button}`}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        ></div>
      )}
      <div className={styles.pages_block}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <div
                className={`${styles.page_box} ${
                  currentPage === p && styles.selected_page
                }`}
                key={p}
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
                {p}
              </div>
            );
          })}
      </div>
      {portionCount > portionNumber && (
        <div
        className={`${styles.page_button} ${styles.next_button}`}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        ></div>
      )}
    </div>
  );
};

export default Paginator;
