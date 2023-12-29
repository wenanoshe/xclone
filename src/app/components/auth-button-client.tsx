'use client'
import {Session, createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {GitHubIcon} from './icons'
import {useRouter} from 'next/navigation'

type Ss = {
  session: Session | null
}

export function AuthButton({session} : Ss) {
  const supabase = createClientComponentClient();
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        // this redirects to the auth/callback/rout.ts that is the file that handles the conection with supabase
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header>
    {
      session === null ? (
      <button onClick={handleSignIn} type="button" className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-2'>
        Sign in
        <GitHubIcon/>
      </button>
      ) : (
      <button onClick={handleSignOut} type="button" className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-2'>
        Sign out
      </button>
      )
    }
    </header>
  )
}