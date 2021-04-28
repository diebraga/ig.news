import { signIn, useSession } from 'next-auth/client'
import { api } from '../services/api'
import { getStripe } from '../services/stripe-js'
import styles from '../styles/subscribebutton.module.scss'

interface subscribeButtonProps {
  priceId: string
} 

export function SubscribeButton({ priceId }: subscribeButtonProps) {
  const [session] = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripe()

      await stripe.redirectToCheckout({ sessionId: sessionId })
    } catch (error) {
      alert(error.message)
      
    }
  }
  return (
    <button 
      type="button" 
      className={styles.subscribeButton}
      onClick={handleSubscribe}>
      Subscribe Now
    </button>
  )
}