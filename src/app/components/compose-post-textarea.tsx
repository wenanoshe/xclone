'use client'

import {useEffect, useRef} from 'react'
import {useFormStatus} from 'react-dom'

export function ComposePostTextarea() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const {pending} = useFormStatus()
    const alreadySent = useRef(false)

    useEffect(() => {
        if(textareaRef.current === null) return
        console.log({textareaRef})

        if(!pending && alreadySent.current) {
            alreadySent.current = false
            textareaRef.current.value = ''
            return
        }

        alreadySent.current = pending
        
    }, [pending])

  return (
    <textarea
        ref={textareaRef}
        name='post'
        rows={4}
        className='w-full resize-none text-1xl p-3 placeholder-slate-500 bg-transparent outline-none focus:'
        placeholder='What is happening?!'
    ></textarea>
  )
}