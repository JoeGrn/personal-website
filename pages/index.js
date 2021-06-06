import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>josephgreen.dev</title>
                <meta name="description" content="Joseph Green Personal Website" />
                <link rel="icon" href="/laptop-emoji.png" />
            </Head>

            <main className={styles.main}>

                <code className={styles.title}>
                    Joseph Green
                </code>

                <p className={styles.description}>
                    <div className={styles.code}>
                        <Typewriter
                            options={{
                                strings: ['Engineer.', 'Architect.', 'Designer.', 'Consultant.'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></div>
                </p>

            </main>

            <footer className={styles.footer}>
                <a href="https://github.com/JoeGrn">
                    <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faGithub} />
                </a>
                <a href="https://www.twitter.com/JoeGrn">
                    <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/jgreen96">
                    <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faLinkedin} />
                </a>
                <a href="mailto:joseph.peter.green@gmail.com">
                    <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={faEnvelope} />
                </a>
            </footer>
        </div>
    )
}
