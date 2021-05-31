import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  maxLengthCreator,
  requiredWithoutMessage,
} from "../../../utils/validators/validators.js";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }

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

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
    props.afterSubmit();
  };

  return (
    <div className="content_box">
      {props.isOwner && <AddNewPostFormRedux onSubmit={onAddPost} />}
      {props.isOwner && postsElements.length > 0 ? (
        <div className={styles.posts_container}>{postsElements}</div>
      ) : null}
    </div>
  );
});

const maxLength = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  let buttonOnClick = (e) => {
    e.currentTarget.blur();
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <div tabIndex="0" className={styles.post_creator_box}>
        <Field
          className={styles.textarea}
          name="newPostText"
          placeholder="How are you?"
          component={Textarea}
          validate={[requiredWithoutMessage, maxLength]}
        />
        <div className={styles.post_creator_tools}>
          <button className={styles.textarea_button} onClick={buttonOnClick}>
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: "profileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
