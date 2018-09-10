import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './searchResults';
import './styles/searchPage.css';

class SearchPage extends React.Component {
    state = {
        searching: true,
        searchError: false,
        items: [],
    }

    async componentDidMount() {
        this.props.searchApi.search(this.props.searchText)
            .then(apiResult => this.setState({
                items: apiResult.results,
                searching: false,
                searchError: false,
            }))
            .catch(() => this.setState({
                items: [],
                searching: false,
                searchError: true,
            }));
    }

    render() {
        if (this.state.searching) {
            return (
                <div className="message-container">
                    <strong className="c-spinner" role="progressbar">Loading...</strong>
                </div>);
        }

        if (this.state.searchError) {
            return (
                <div className="message-container">
                    <h3>There was an error searching.  Please try again.</h3>
                </div>);
        }

        if (this.state.items.length === 0) {
            return (
                <div className="message-container">
                    <h3>No results found.</h3>
                </div>);
        }

        return <SearchResults items={this.state.items} />;
    }
}

SearchPage.propTypes = {
    searchApi: PropTypes.shape({
        search: PropTypes.func,
    }).isRequired,
    searchText: PropTypes.string,
};

SearchPage.defaultProps = {
    searchText: '',
};

export default SearchPage;
