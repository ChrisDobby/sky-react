import React from 'react';
import HomePage from '../components/homePage';
import WithSearchForm from '../components/withSearchForm';

export default (props) => {
    const PageWithSearch = WithSearchForm(HomePage);
    return <PageWithSearch {...props} />;
};
