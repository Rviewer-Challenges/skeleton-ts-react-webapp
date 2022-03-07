import logo from "./rviewer-logo.svg";
import styles from './Header.module.css'

export function Header() {

    return (
        <header className={styles.header}>
            <img width={80} src={logo} className={styles.rviewerLogo} alt="Rviewer logo"/>
            <h3>
                Welcome to the Rviewer React skeleton!
            </h3>
        </header>
    )
}
