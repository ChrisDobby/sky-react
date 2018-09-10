import React from 'react';
import api from '../api/api';
import searchApi from '../api/searchApi';

export default Component => props => (
    <Component searchApi={searchApi(api(3, 1000))} {...props} />
);
