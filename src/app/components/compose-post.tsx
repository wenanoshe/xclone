import {createServerActionClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import Link from 'next/link'
import {IconSend2} from '@tabler/icons-react'
import { revalidatePath } from 'next/cache'
import {ComposePostTextarea} from './compose-post-textarea'

export function ComposePost({
    avatarUrl
} : {
    avatarUrl: string
}) {
    const addPost = async (formData: FormData) => {
        'use server'
        const content = formData.get('post')

        if(content === null) return

        const supabase = createServerActionClient({cookies})

        // review if the user is really authenticated
        const {data: {user}} = await supabase.auth.getUser()
        if(user === null) return

        await supabase.from('posts').insert({ content, user_id: user.id})
    
        /* this function once done the sentences before declared what do 
        is to revalidate the path that we set as parameter (in this case is root) 
            It is like a refresh of the petitions to the server done in <page.tsx>
        */
        revalidatePath('/')
    }

    return (
        <form action={addPost} className='flex gap-y-4 p-3'>
            <Link href={`/`} className="flex relative justify-center items-center border-2 border-slate-500 box-content rounded-full align-middle overflow-hidden w-10 h-10">
                <img src={avatarUrl} className="flex object-cover w-full h-full" alt="avatar" data-loaded="true"/>
            </Link>
            <div className='flex flex-col w-full'>
                <ComposePostTextarea />
                <button className='flex gap-2 items-center bg-indigo-600 hover:bg-indigo-500 text-sm py-2 px-4 rounded-full self-end'>
                    Post 
                    <IconSend2 className='h-4 w-4'/> 
                </button>
            </div>

        </form>
    )
}