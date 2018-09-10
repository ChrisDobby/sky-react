const searchApi = (api) => {
    const searchRoute = 'https://help-search-api-prod.herokuapp.com/search';
    const search = query =>
        api.get(`${searchRoute}?query=${query}`);

    return {
        search,
    };
};

export default searchApi;
