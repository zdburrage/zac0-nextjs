import { NextResponse } from 'next/server';
import { ManagementClient } from 'auth0';
import { UserUpdate } from 'auth0';

export const POST = (async function updateUserMetadata(req) {
    try {
        var auth0 = new ManagementClient({
            domain: 'zacsandbox.us.auth0.com',
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET
        });
        const res = new NextResponse();
        const body = await req.json();
        var updatedUser = {
            user_metadata: {
                last4: body.last4,
                loanId: body.loanId
            }
        }

        const rsp = await auth0.users.update({ id: req.nextUrl.searchParams.get('user_id') }, updatedUser);

        return NextResponse.json(rsp, res);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: error.status || 500 });
    }
});