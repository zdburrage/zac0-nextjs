function buildAuthParams(nextUrl) {
    const params = ['connection', 'organization', 'discountCode', 'acr_values'];
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