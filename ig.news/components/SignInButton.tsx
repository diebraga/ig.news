import styles from '../styles/signinbutton.module.scss'
import { FaGithub } from 'react-icons/fa'

export function SignInButton() {
  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub />
      Sign in with GitHub
    </button>
  )
}