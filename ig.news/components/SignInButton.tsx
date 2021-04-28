import styles from '../styles/signinbutton.module.scss'
import { FcGoogle } from 'react-icons/fc'
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
      <FcGoogle />
      {session.user.name} 
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"   
      className={styles.signInButton}
      onClick={() => {signIn('google')}}
    >
      <FcGoogle />
      Sign in with Google
    </button>
  )
}