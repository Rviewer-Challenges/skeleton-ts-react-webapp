import styles from './Home.module.css'

export function Home() {

    return (
        <div className={styles.home}>
            <p>
                Here you would find a React bootstrapped webapp where you could start coding without taking care
                about configuring so many things, and just focus on the code!
            </p>
            <p>
                You could start modifying the <code>src/App.tsx</code> file to see any change in the webapp.
            </p>
        </div>
    )


}
