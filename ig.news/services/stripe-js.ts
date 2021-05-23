import { loadStripe } from '@stripe/stripe-js'

export async function getStripe() {
  const stripeJs = await loadStripe(`pk_test_51IgXqLC9XoOuhM8BGYwLRHhFzKBicydMUyhNiLYmiztUzpgMRiokX1BmJGQtU5wGfyD4mw3UNee9vf6YPg1KFRqD008b7XoKQm`)

  return stripeJs
}