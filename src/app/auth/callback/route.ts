// This is the form to create an api in nextjs, making a file called route.ts

import { type NextRequest, NextResponse } from "next/server";
import {cookies} from 'next/headers'
import {createRouteHandlerClient} from '@supabase/auth-helpers-nextjs'

export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code');

    if (code !== null) {
        const supabase = createRouteHandlerClient({cookies})
        // passing de code by url, returns the user session 
        await supabase.auth.exchangeCodeForSession(code)
    }

    /* the 'request.url' parameter indicates that once the user is logs in
     they could turn back to the last page he visit */
    return NextResponse.redirect(requestUrl.origin)
}