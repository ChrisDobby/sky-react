import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './searchForm';
import './styles/withSearchForm.css';

const WithSearchForm = (Component) => {
    const ComponentWithSearch = props => (
        <div className="container">
            <SearchForm text={props.searchText} search={searchText => props.history.push(`/search/${searchText}`)} />
            <div className="component">
                <Component {...props} />
            </div>
        </div>
    );

    ComponentWithSearch.propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
        searchText: PropTypes.string,
    };

    ComponentWithSearch.defaultProps = {
        searchText: '',
    };

    return ComponentWithSearch;
};

export default WithSearchForm;
