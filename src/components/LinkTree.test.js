import { render, screen } from '@testing-library/react';
import LinkTree from './LinkTree';

test('renders Meus Links heading', () => {
  render(<LinkTree />);
  const heading = screen.getByText(/Meus Links/i);
  expect(heading).toBeInTheDocument();
});





const request = require('supertest');
const express = require('express');
const app = require('./server'); // Seu servidor express

describe('GET /api/links', () => {
  it('should return a list of links', async () => {
    const res = await request(app).get('/api/links');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(3);
  });
});

