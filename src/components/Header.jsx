import logo from './../logo.svg';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;