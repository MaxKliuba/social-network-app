import React from "react";
import styles from "./Page404.module.css";
import notFound from "../../assets/images/notFound.png";

const Page404 = (props) => {
  return (
    <div className="content_box">
      <div className={styles.content_block}>
        <h2 className={styles.page_title}>404 Not Found</h2>
        <img className={styles.notFoundImg} src={notFound} />
      </div>
    </div>
  );
};

export default Page404;
