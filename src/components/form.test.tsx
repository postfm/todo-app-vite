import { describe, it, expect, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';

describe('Form ', () => {
  it('is first test', () => {
    const addTodo = vitest.fn();

    render(<Form addTodo={addTodo} />);

    userEvent.click(screen.getByRole('button'));
    userEvent.type(screen.getByLabelText('Add new task:'), 'New task');

    expect(screen.getByLabelText(/Add new task:/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add new task here ...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });
});
