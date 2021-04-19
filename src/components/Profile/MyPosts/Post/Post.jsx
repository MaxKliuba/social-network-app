import styles from './Post.module.css';

function Post(props) {
    return (
        <div className={styles.post_box}>
            <img className={styles.user_avatar} src="https://avatarfiles.alphacoders.com/150/thumb-150316.jpg" alt="avatar"></img>
            <div className={styles.edit_button}>
                <div className={styles.edit_button_content}></div>
            </div>
            <div className={styles.post_header}>
                <h4 className={styles.user_name}>Test User Name</h4>
                <h6 className={styles.post_datetime}>{props.datetime}</h6>
            </div>
            <div className={styles.post_content}>
                <p>{props.text}</p>
            </div>
            <div className={styles.post_footer}>
                <div className={styles.like_button}>
                    <span className={styles.like_text}>{props.like}</span>
                    <div className={styles.heart}></div>
                </div>
            </div>
        </div>
    );
}

export default Post;