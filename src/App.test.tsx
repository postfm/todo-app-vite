import App from './App';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('<App />', () => {
  it('is first test', () => {
    render(<App />);

    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  });
});
