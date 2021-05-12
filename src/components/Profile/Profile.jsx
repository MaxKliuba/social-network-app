import React from "react";
import Preloader from "../common/Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  if (!props.profile) {
    return (
      <div className="content_box">
        <Preloader />
      </div>
    );
  }

  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
