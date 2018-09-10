import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

/* eslint-disable react/jsx-filename-extension */
render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);
/* eslint-enable react/jsx-filename-extension */
