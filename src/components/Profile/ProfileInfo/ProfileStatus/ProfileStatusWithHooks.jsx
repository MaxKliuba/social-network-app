import React, { useEffect, useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true);
    }
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
        <div className={styles.status_text} onDoubleClick={activateEditMode}>
          {props.status || "--"}
        </div>
      ) : (
        <input
          className={styles.input_status_text}
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
