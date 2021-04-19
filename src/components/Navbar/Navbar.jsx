import styles from './Navbar.module.css';

// {`${styles.nav} ${styles.active}`}

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="/dialogs">
                    Dialogs
                    <span className={styles.item_indicator}>+1</span>
                </a>
            </div>
            <div className={styles.item}>
                <a href="/friends">
                    Friends
                    <span className={styles.item_indicator}>+2</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;