export default (defaultRetries, retryWaitMilliseconds) => {
    const tryFetch = async (fetchPromise, retries) => {
        const retryAfterWait = retryCount => new Promise(resolve =>
            setTimeout(resolve, retryWaitMilliseconds, tryFetch(fetchPromise, retryCount)));

        const availableRetries = typeof retries === 'undefined' ? defaultRetries : Number(retries);

        try {
            const response = await fetchPromise();
            if (!response.ok && availableRetries) { return retryAfterWait(availableRetries - 1); }

            return response;
        } catch (err) {
            if (!availableRetries) { throw err; }
            return retryAfterWait(availableRetries - 1);
        }
    };

    const responseData = response => response.json();

    const get = async (route) => {
        const response = await tryFetch(() => fetch(route));
        return responseData(response);
    };

    return {
        get,
    };
};
