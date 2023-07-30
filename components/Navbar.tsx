import styles from './Navbar.module.css'

const Navbar = ()=>{
    return (
        <nav className={styles.navbar} >
            <span>Componentia</span>
            <ul>
                <li><a href='#home' >Home</a></li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;