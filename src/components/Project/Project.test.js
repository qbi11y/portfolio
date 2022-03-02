import React from "react";
import { render, screen } from '@testing-library/react'

import Project from './Project';

describe('Project', () => {
    test('renders Project component', () => {
        render(<Project />);
        screen.debug();
    })
})