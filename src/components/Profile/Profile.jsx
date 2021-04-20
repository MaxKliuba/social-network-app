import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
    return (
        <div>
            <ProfileInfo id="0" status="Online" name="User Test Name" avatar="https://avatarfiles.alphacoders.com/150/thumb-150316.jpg" birthday="31.02.2000" city="Test-City"/>
            <div className='content_box'>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;