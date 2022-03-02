import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from "react-router";

import Project from './Project';

describe('Project', () => {
    test('renders Project component with project id param', () => {
        render(
            <MemoryRouter initialEntries={['/portfolio/project/2']}>
                <Routes>
                    <Route path="/portfolio/project/:id" element={<Project />} />
                </Routes>
            </MemoryRouter>
        );})
})