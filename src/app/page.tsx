import './globals.css'

import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import {redirect} from 'next/navigation'
import {PostsList} from './components/posts-list'
import {type Database} from './types/database'
import {ComposePost} from './components/compose-post'

export default async function Home () {
    const supabase = createServerComponentClient<Database>({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    if(session === null) {
        redirect('/login')
    }

    const {data: posts} = await supabase
        .from('posts')
        .select('*, users(*)')
        .order('created_at', {ascending: false})
    
    
    return (
        <main className='flex min-h-screen flex-col items-center justify-center'>
            <section className='flex flex-col gap-y-2 max-w-[600px] w-full mx-auto border-x-2 min-h-screen border-white/10'>
                <ComposePost avatarUrl={session.user.user_metadata.avatar_url} />
                <PostsList posts={posts} />
            </section>
            <AuthButtonServer/>

        </main>
    )
}