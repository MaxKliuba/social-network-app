import React, { useEffect, useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode ? (
        <span onDoubleClick={activateEditMode}>{props.status || "--"}</span>
      ) : (
        <input
          className={styles.status_input_text}
          autoFocus={true}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
        />
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
