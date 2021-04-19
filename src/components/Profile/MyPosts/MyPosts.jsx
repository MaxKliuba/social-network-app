import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            <div tabindex="0" className={styles.post_creator_box}>
                <textarea className={styles.textarea} maxlength="5000" placeholder="How are you?"></textarea>
                <div className={styles.post_creator_tools}>
                    <input type='button' className={styles.textarea_button} value='Send'/>
                </div>
            </div>
            <Post user_id="0" datetime="17:21 19.04.2021" text="test post 1" like="1"/>
            <Post user_id="0" datetime="17:22 19.04.2021" text="test post 2" like="10"/>
            <Post user_id="0" datetime="17:23 19.04.2021" text="test post 3" like="100"/>
            <Post user_id="0" datetime="17:24 19.04.2021" text="test post 4" like="10000000000000000000"/>
            <Post user_id="0" datetime="17:25 19.04.2021" text="test post 5" like="0"/>
            <Post user_id="0" datetime="17:26 19.04.2021" text="test post 6" like="0"/>
            <Post user_id="0" datetime="17:27 19.04.2021" text="test post 7" like="0"/>
        </div>
    );
}

export default MyPosts;