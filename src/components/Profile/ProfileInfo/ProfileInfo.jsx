import styles from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div>
            <h3 className={styles.status}>{props.userData.status}</h3>
            <div className='content_box'>
                <img className={styles.avatar} src={props.userData.avatar} alt="avatar"></img>
                <div className={styles.profile_info}>
                    <h2 className={styles.user_name}>{props.userData.name}</h2>
                    <div className={styles.group}>
                        <label className={styles.group_label}>Birthday:</label>
                        <span className={styles.group_text}>{props.userData.birthday}</span>
                    </div>
                    <div className={styles.group}>
                        <label className={styles.group_label}>City:</label>
                        <span className={styles.group_text}>{props.userData.city}</span>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;