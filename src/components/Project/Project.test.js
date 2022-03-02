import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import Project from './Project';

describe('Project', () => {
    test('renders Project component', () => {
        render(
            <Router>
                <Project />
            </Router>);
        //screen.debug();
    })
})