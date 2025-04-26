import { describe, it, expect, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import ClearCompletedButton from './clear-completed-button';
import userEvent from '@testing-library/user-event';

describe('<ClearCompletedButton />', () => {
  it('is first test', () => {
    const clearCompleted = vitest.fn();

    render(<ClearCompletedButton clearCompleted={clearCompleted} />);

    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Clear Completed/i)).toBeInTheDocument();
  });
});
