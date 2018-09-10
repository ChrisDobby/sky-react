import React from 'react';
import PropTypes from 'prop-types';

const SearchResultRow = ({ item }) => (
    <tr className="c-table-simple__row">
        <td className="c-table-simple__cell"><a href={item.url} target="_blank">{item.title}</a></td>
        <td className="c-table-simple__cell">{item.description}</td>
    </tr>
);

SearchResultRow.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default SearchResultRow;
