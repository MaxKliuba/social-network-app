import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/userPhoto.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { Input } from "../../common/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";

function ProfileInfo(props) {
  let [editMode, setEditMode] = useState(false);

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData);
  };

  return (
    <div>
      <div className="content_box">
        <img
          className={styles.avatar}
          src={props.profile.photos.large || userPhoto}
          alt="avatar"
        ></img>
        {props.isOwner && <input type={"file"} onChange={onAvatarSelected} />}
        {editMode ? (
          <ProfileDataReduxForm
            profile={props.profile}
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
            onSubmit={onSubmit}
            goToEditMode={() => {
              setEditMode(false);
            }}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

const ProfileData = (props) => {
  return (
    <>
      <div className={styles.profile_info}>
        <div className={styles.user_name_box}>
          <div className={styles.user_name}>{props.profile.fullName}</div>
        </div>
        <div className={styles.group}>
          <ProfileStatusWithHooks
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.group_label}>About me:</label>
          <span>{props.profile.aboutMe || "--"}</span>
        </div>
        {props.isOwner && (
          <div className={styles.group}>
            <button onClick={props.goToEditMode}>EDIT</button>
          </div>
        )}
      </div>
    </>
  );
};

const ProfileDataForm = (props) => {
  return (
    <div className={styles.profile_info}>
      <form onSubmit={props.handleSubmit}>
        <div className={styles.user_name_box}>
          <div className={styles.user_name}>
            <Field
              // className={styles.text_input}
              placeholder={"full name"}
              name={"fullName"}
              component={Input}
              validate={[]}
            />
          </div>
        </div>
        <div className={styles.group}>
          <ProfileStatusWithHooks
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.group_label}>About me:</label>
          <Field
            // className={styles.text_input}
            placeholder={"about me"}
            name={"aboutMe"}
            component={Input}
            validate={[]}
          />
        </div>
        <div className={styles.group}>
          <Field
            type={"checkbox"}
            name={"lookingForAJob"}
            component={"input"}
          />
        </div>
        <div className={styles.group}>
          <Field
            placeholder={"description"}
            name={"lookingForAJobDescription"}
            component={Input}
          />
        </div>
        <div className={styles.group}>
          <button>SAVE</button>
        </div>
      </form>
    </div>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileInfo;
