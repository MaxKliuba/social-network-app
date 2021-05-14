import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import errorStyles from "../../common/FormsControls/FormsControls.module.css"
import userPhoto from "../../../assets/images/userPhoto.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { Input } from "../../common/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

function ProfileInfo(props) {
  let [editMode, setEditMode] = useState(false);

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className="content_box">
      <div className={styles.profile_content_box}>
        <div className={styles.avatar_box}>
          {props.isOwner ? (
            <>
              <input
                id={"upload_avatar"}
                className={styles.upload_photo_input}
                type={"file"}
                accept=".jpg, .jpeg, .png"
                onChange={onAvatarSelected}
              />
              <label
                htmlFor={"upload_avatar"}
                className={styles.upload_photo_label}
              >
                <img
                  className={styles.avatar}
                  src={props.profile.photos.large || userPhoto}
                  alt="avatar"
                />
              </label>
            </>
          ) : (
            <img
              className={styles.avatar}
              src={props.profile.photos.large || userPhoto}
              alt="avatar"
            />
          )}
        </div>

        {editMode ? (
          <ProfileDataReduxForm
            initialValues={props.profile}
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
            onSubmit={onSubmit}
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
    <div className={styles.profile_info_box}>
      <div className={styles.profile_info}>
        <div className={styles.user_name}>{props.profile.fullName}</div>
        <ProfileStatusWithHooks
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div className={styles.group_box}>
          <div className={styles.group}>
            <label className={styles.group_label}>About me:</label>
            <div className={styles.group_text}>
              {props.profile.aboutMe || "--"}
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.group_label}>Description:</label>
            <div className={styles.group_text}>
              {props.profile.lookingForAJobDescription || "--"}
            </div>
          </div>
        </div>
      </div>
      {props.isOwner && (
        <div className={styles.editButtonBox}>
          <button
            className={`${styles.editButton} ${styles.editOpen}`}
            onClick={props.goToEditMode}
          ></button>
        </div>
      )}
    </div>
  );
};

const ProfileDataForm = (props) => {
  return (
    <form className={styles.profile_info_box} onSubmit={props.handleSubmit}>
      <div className={styles.profile_info}>
        <div className={styles.user_name}>
          <Field
            className={styles.input_user_name}
            placeholder={"full name"}
            name={"fullName"}
            component={Input}
            validate={[required,]}
          />
        </div>
        <ProfileStatusWithHooks
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div className={styles.group_box}>
          <div className={styles.group}>
            <label className={styles.group_label}>About me:</label>
            <div className={styles.input_group_text_box}>
              <Field
                className={styles.input_group_text}
                placeholder={"about me"}
                name={"aboutMe"}
                component={Input}
                validate={[required,]}
              />
            </div>
          </div>
          <div className={`${styles.group} ${styles.noDisplay}`}>
            <Field
              type={"checkbox"}
              name={"lookingForAJob"}
              component={"input"}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.group_label}>Description:</label>
            <div className={styles.input_group_text_box}>
              <Field
                className={styles.input_group_text}
                placeholder={"description"}
                name={"lookingForAJobDescription"}
                component={Input}
                validate={[required,]}
              />
            </div>
          </div>
        </div>
        {props.error && <div className={errorStyles.error_message}>{props.error}</div>}
      </div>
      <div className={styles.editButtonBox}>
        <button
          className={`${styles.editButton} ${styles.editConfirm}`}
        ></button>
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileInfo;
