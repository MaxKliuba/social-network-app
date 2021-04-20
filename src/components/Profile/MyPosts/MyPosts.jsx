import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.postsData.map(el => {
        return (
            <Post id={el.id} user_id={el.user_id} user_name={el.user_name} user_avatar={el.user_avatar} datetime={el.datetime} text={el.text} like={el.like}/>
        );
    });

    return (
        <div>
            <div tabIndex="0" className={styles.post_creator_box}>
                <textarea className={styles.textarea} maxlength="5000" placeholder="How are you?"></textarea>
                <div className={styles.post_creator_tools}>
                    <button className={styles.textarea_button} onClick={ () => { alert('lol') } }>Send</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;