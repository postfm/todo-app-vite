import App from './App';
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<App />', () => {
  it('is first test', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });
});
