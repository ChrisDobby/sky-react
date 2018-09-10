import React from 'react';
import SearchPage from '../components/searchPage';
import WithSearchApi from '../components/withSearchApi';
import WithSearchForm from '../components/withSearchForm';

export default (props) => {
    const PageWithApiAndForm = WithSearchForm(WithSearchApi(SearchPage));
    return <PageWithApiAndForm {...props} />;
};
