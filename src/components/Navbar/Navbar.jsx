import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    let navbarData = [
        {link: "/profile", text: "Profile", indicator_value: 0},
        {link: "/dialogs", text: "Dialogs", indicator_value: 1},
        {link: "/friends", text: "Friends", indicator_value: 2},
    ]
    
    let navbarElements = navbarData.map(el => {
        return (
            <div className={styles.item}>
                <NavLink to={el.link} activeClassName={styles.activeLink}>
                    {el.text}
                    {el.indicator_value > 0 ? (<span className={styles.item_indicator}>+{el.indicator_value}</span>) : null}
                </NavLink>
            </div>
        );
    });

    return (
        <nav className={styles.nav}>
            {navbarElements}
        </nav>
    );
}

export default Navbar;