import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './containers/homePage';
import SearchPage from './containers/searchPage';

const Routes = () => (
    <div>
        <Route exact path="/" component={HomePage} />
        <Route
            exact
            path="/search/:searchText"
            render={props => <SearchPage {...props} searchText={props.match.params.searchText} />}
        />
    </div>
);

Routes.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
            searchText: PropTypes.string,
        }),
    }),
};

Routes.defaultProps = {
    match: null,
};

export default Routes;
