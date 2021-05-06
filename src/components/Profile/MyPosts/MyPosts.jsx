import React from "react";
import { Field, reduxForm } from "redux-form";
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

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className="content_box">
      <AddNewPostRedux onSubmit={onAddPost} />
      {postsElements}
    </div>
  );
}

const AddNewPost = (props) => {
  let buttonOnClick = (e) => {
    e.currentTarget.blur();
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <div tabIndex="0" className={styles.post_creator_box}>
        <Field
          className={styles.textarea}
          name="newPostText"
          placeholder="How are you?"
          component={"textarea"}
        />
        <div className={styles.post_creator_tools}>
          <button
            className={styles.textarea_button}
            onClick={buttonOnClick}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

const AddNewPostRedux = reduxForm({form: "ProfileAddNewPost"})(AddNewPost);

export default MyPosts;
