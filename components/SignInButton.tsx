import styles from '../styles/signinbutton.module.scss'
import { GrGithub } from 'react-icons/gr'
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
      <GrGithub />
      {session.user.name} 
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"   
      className={styles.signInButton}
      onClick={() => {signIn('github')}}
    >
      <GrGithub />
      Sign in with Github 
    </button>
  )
}