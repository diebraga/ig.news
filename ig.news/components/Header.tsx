import Link from 'next/link'
import styles from '../styles/header.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="logo.svg" alt="logo"/>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}