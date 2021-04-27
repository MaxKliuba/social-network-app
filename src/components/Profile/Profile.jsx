import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo userData={props.profilePage.userData} />
      <div className="content_box">
        <MyPosts
          postsData={props.profilePage.postsData}
          dispatch={props.dispatch}
          newPostText={props.profilePage.newPostText}
        />
      </div>
    </div>
  );
}

export default Profile;
