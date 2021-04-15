import styles from '../styles/signinbutton.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isLoggedIn = true
  
  return isLoggedIn ? (
    <button 
      type="button"   
      className={styles.signInButton}
    >
      <FaGithub color='#61dafb' />
      Diebraga 
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"   
      className={styles.signInButton}
    >
      <FaGithub color='#d90602' />
      Sign in with GitHub
    </button>
  )
}