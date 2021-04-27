import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsElements = props.postsData.map((el) => {
    return (
      <Post
        id={el.id}
        user_id={el.user_id}
        user_name={el.user_name}
        user_avatar={el.user_avatar}
        datetime={el.datetime}
        text={el.text}
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

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
    textareaButton.current.blur();
  };

  let onPostChange = () => {
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value });
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
          <button className={styles.textarea_button} ref={textareaButton} onClick={addPost}>
            Send
          </button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
