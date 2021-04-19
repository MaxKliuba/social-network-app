import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

function Profile() {
    return (
        <div className={styles.content}>
            <h3 className={styles.status}>Online</h3>
            <div className={styles.content_box}>
                <img className={styles.avatar} src="https://avatarfiles.alphacoders.com/150/thumb-150316.jpg" alt="avatar"></img>
                <div className={styles.profile_info}>
                    <h2 className={styles.user_name}>Test User Name</h2>
                    <div className={styles.group}>
                        <label className={styles.group_label}>Birthday:</label>
                        <input className={styles.group_text} type="text" readOnly value="31.02.2000"/>
                    </div>
                    <div className={styles.group}>
                        <label className={styles.group_label}>City:</label>
                        <input className={styles.group_text} type="text" readOnly value="Test-City"/>
                    </div>                   
                </div>
            </div>
            <div className={styles.content_box}>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;