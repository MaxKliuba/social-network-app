import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? styles.error : ""}>
      {props.children}
      {hasError && <div className={styles.error_message_box}>{meta.error}</div>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
  
    return (
      <FormControl {...props}>
        <input {...input} {...restProps} />
      </FormControl>
    );
  };
