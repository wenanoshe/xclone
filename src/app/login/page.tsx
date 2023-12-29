import {AuthButtonServer} from '../components/auth-button-server'

export default function Login() {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-xl font-bold mb-4'>Login in wao</h1>
      <AuthButtonServer/>
    </section>
  )
}
