import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsElements = props.postsData.map((el) => {
    return (
      <Post
        key={el.postId}
        postId={el.postId}
        userId={el.userId}
        userName={el.userName}
        userAvatar={el.userAvatar}
        postDatetime={el.postDatetime}
        postText={el.postText}
        like={el.like}
      />
    );
  });

  if (props.postsData.length > 0) {
    postsElements = (
      <div className={styles.posts_container}>{postsElements}</div>
    );
  }

  let newPostElement = React.createRef();
  let textareaButton = React.createRef();

  let onAddPost = () => {
    props.addPost();
    textareaButton.current.blur();
  };

  let onPostChange = () => {
    props.newPostChange(newPostElement.current.value);
  };

  return (
    <div>
      <div tabIndex="0" className={styles.post_creator_box}>
        <textarea
          className={styles.textarea}
          ref={newPostElement}
          onChange={onPostChange}
          maxLength="5000"
          placeholder="How are you?"
          value={props.newPostText}
        ></textarea>
        <div className={styles.post_creator_tools}>
          <button
            className={styles.textarea_button}
            ref={textareaButton}
            onClick={onAddPost}
          >
            Send
          </button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
