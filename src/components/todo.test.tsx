import { describe, it, expect, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './todo';

describe('Todo', () => {
  it('is first test', () => {
    const toggleTodoCompleted = vitest.fn();

    render(
      <Todo
        id={'1'}
        name={'name'}
        completed={false}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    );

    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
