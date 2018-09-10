import React from 'react';
import PropTypes from 'prop-types';
import SearchResultRow from './searchResultRow';
import './styles/searchResults.css';

class SearchResults extends React.Component {
    state = { currentIndex: 0 }

    canGoForward = () => this.props.items.length > this.state.currentIndex + 10;
    canGoBack = () => this.state.currentIndex - 10 >= 0;

    moveForward = () => {
        if (!this.canGoForward()) { return; }
        this.setState({ currentIndex: this.state.currentIndex + 10 });
    }

    moveBack = () => {
        if (!this.canGoBack()) { return; }
        this.setState({ currentIndex: this.state.currentIndex - 10 });
    }

    headingText = () => `Showing ${this.state.currentIndex + 1} - ` +
        `${this.canGoForward() ? this.state.currentIndex + 10 : this.props.items.length} of ${this.props.items.length}`;

    backText = () => `${this.state.currentIndex - 9} - ${this.state.currentIndex}`;
    forwardText = () =>
        `${this.state.currentIndex + 11} - ` +
        `${this.state.currentIndex + 20 <= this.props.items.length
            ? this.state.currentIndex + 20
            : this.props.items.length}`;

    render() {
        return (
            <div>
                <div>
                    <h4 className="heading">{this.headingText()}</h4>
                    <h4 className="indicator">
                        {this.canGoBack() &&
                            <button className="c-link c-link--back back-button" onClick={this.moveBack}>
                                {this.backText()}
                            </button>}
                        {this.canGoForward() &&
                            <button className="c-link c-link--external forward-button" onClick={this.moveForward}>
                                {this.forwardText()}
                            </button>}
                    </h4>
                </div>
                <table className="c-table-simple">
                    <tbody>
                        {this.props.items.slice(
                            this.state.currentIndex,
                            this.state.currentIndex + 10
                        ).map(item => <SearchResultRow key={item.title} item={item} />)}
                    </tbody>
                </table>
            </div>);
    }
}

SearchResults.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
    })).isRequired,
};

export default SearchResults;
