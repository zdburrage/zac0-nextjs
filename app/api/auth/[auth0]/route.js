import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import  buildAuthParams from '../../../../utils/authParamsUtil'

export const GET = handleAuth({
    async login(req, res) {
        const authParams = buildAuthParams(req.nextUrl);
        console.log(authParams);
        return await handleLogin(req, res, {
            authorizationParams: authParams
        });
    }
});


