import './globals.css'

import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import {redirect} from 'next/navigation'
import {PostsList} from './components/posts-list'

export default async function Home () {
    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    if(session === null) {
        redirect('/login')
    }

    const {data: posts} = await supabase.from('posts').select('*, users(*)')
    
    
    return (
        <main className='flex min-h-screen flex-col items-center justify-center'>
            <section className='max-w-[600px] mx-auto border-x-2 min-h-screen border-white/30'>
                <AuthButtonServer/>
                <PostsList posts={posts} />
            </section>

        </main>
    )
}