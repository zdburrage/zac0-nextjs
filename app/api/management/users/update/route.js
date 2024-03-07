import { NextResponse } from 'next/server';
import { ManagementClient } from 'auth0';

export const GET = (async function updateUserMetadata(req) {
    try {
        var auth0 = new ManagementClient({
            domain: 'zacsandbox.us.auth0.com',
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET
        });
        const res = new NextResponse();
        
        const rsp = await auth0.users.get({ id: req.nextUrl.searchParams.get('user_id') });

        return NextResponse.json(rsp, res);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: error.status || 500 });
    }
});