import React from "react";
import { render, screen } from '@testing-library/react'

import Home from './Home';
import projects from 'data/projects.json' 

describe('Home', () => {
    test('renders Home component here', () => {
        render(<Home />);
        screen.debug();
    })
})