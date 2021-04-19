import styles from '../styles/signinbutton.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/client'

export function SignInButton() {
  const [session] = useSession()
  
  return session ? (
    <button 
      type="button"   
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color='#61dafb' />
      {session.user.name} 
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"   
      className={styles.signInButton}
      onClick={() => {signIn('github')}}
    >
      <FaGithub color='#d90602' />
      Sign in with GitHub
    </button>
  )
}