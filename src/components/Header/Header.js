import Search from '../Search/Search'
import styles from './Header.module.scss'

function Header () {
    return (
        <header className={styles.container}>
            <h1><i className="fab fa-github"></i></h1>
            <Search />
        </header>
    )
}

export default Header;