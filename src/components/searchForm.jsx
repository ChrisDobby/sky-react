import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    state = { searchText: this.props.text }

    searchTextValueChange = evt => this.setState({ searchText: evt.target.value });

    searchTextKeyDown = (evt) => {
        if (evt.keyCode === 13) {
            this.doSearch();
        }
    }

    doSearch = () => {
        if (this.state.searchText.length > 0) {
            this.props.search(this.state.searchText);
        }
    }

    render() {
        return (
            <React.Fragment>
                <ul className="c-form-list">
                    <li className="c-form-list__item c-form-list__item--full">
                        <div className="c-form-combo">
                            <div className="c-form-combo__cell">
                                <input
                                    type="text"
                                    className="c-form-combo__input c-form-input"
                                    placeholder="Search text..."
                                    id="search-input"
                                    name="search-input"
                                    value={this.state.searchText}
                                    onKeyDown={this.searchTextKeyDown}
                                    onChange={this.searchTextValueChange}
                                />
                            </div>
                            <div className="c-form-combo">
                                <button
                                    className="c-form-combo__btn c-btn c-btn--primary"
                                    onClick={this.doSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
                <hr className="c-divider c-divider--top" />
            </React.Fragment>);
    }
}

SearchForm.propTypes = {
    text: PropTypes.string,
    search: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
    text: '',
};

export default SearchForm;
