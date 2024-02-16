function buildAuthParams(nextUrl) {
    const params = ['connection', 'organization'];
    var authParams = {

    };
    if (nextUrl.searchParams) {
        params.forEach(x => {
            if (nextUrl.searchParams.get(x)) {
                authParams[x.toString()] = nextUrl.searchParams.get(x);
            }
        });
    }
    return authParams;
}

export default buildAuthParams;