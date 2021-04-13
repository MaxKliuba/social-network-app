import styles from './Navbar.module.css';

// {`${styles.nav} ${styles.active}`}

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>Profile</div>
            <div>Messages</div>
        </nav>
    );
}

export default Navbar;