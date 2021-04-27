import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

function Profile(props) {
  return (
    <div>
      <ProfileInfoContainer/>
      <div className="content_box">
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
