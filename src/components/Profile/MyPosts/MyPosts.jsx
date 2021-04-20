import styles from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
    {id: 0, user_id: 0, user_name: "User Test Name", user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg", datetime: "17:21 19.04.2021", text: "test post 1", like:100000000000000000000},
    {id: 1, user_id: 0, user_name: "User Test Name", user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg", datetime: "17:21 19.04.2021", text: "test post 1", like:10},
    {id: 2, user_id: 0, user_name: "User Test Name", user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg", datetime: "17:21 19.04.2021", text: "test post 1", like:100},
    {id: 3, user_id: 0, user_name: "User Test Name", user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg", datetime: "17:21 19.04.2021", text: "test post 1", like:1000},
    {id: 4, user_id: 0, user_name: "User Test Name", user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg", datetime: "17:21 19.04.2021", text: "test post 1", like:10000},

]

let postsElements = posts.map(el => {
    return (
        <Post id={el.id} user_id={el.user_id} user_name={el.user_name} user_avatar={el.user_avatar} datetime={el.datetime} text={el.text} like={el.like}/>
    );
})

function MyPosts() {
    return (
        <div>
            <div tabindex="0" className={styles.post_creator_box}>
                <textarea className={styles.textarea} maxlength="5000" placeholder="How are you?"></textarea>
                <div className={styles.post_creator_tools}>
                    <input type='button' className={styles.textarea_button} value='Send'/>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;