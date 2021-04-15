import styles from './Navbar.module.css';

// {`${styles.nav} ${styles.active}`}

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <input type='button' className={styles.item_text} value='Profile'/>
            </div>
            <div className={styles.item}>
                <input type='button' className={styles.item_text} value='Messages'/>
                <input type='button' className={styles.item_indicator} value='+1'/>
            </div>
            <div className={styles.item}>
                <input type='button' className={styles.item_text} value='Friends'/>
                <input type='button' className={styles.item_indicator} value='+2'/>
            </div>
        </nav>
    );
}

export default Navbar;