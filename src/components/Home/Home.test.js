import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import Home from './Home';
import projects from 'data/projects.json' 

describe('Home', () => {
    test('renders Home component here', () => {
        render(
        <Router>
            <Home />
        </Router>);
        //screen.debug();
    })
})