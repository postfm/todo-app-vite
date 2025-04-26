import { describe, it, expect, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoList from './todo-list';
import userEvent from '@testing-library/user-event';

describe('TodoList', () => {
  it('is first test', () => {
    const toggleTodoCompleted = vitest.fn();
    const clearCompleted = vitest.fn();
    const setFilter = vitest.fn();

    render(
      <TodoList
        todos={[]}
        toggleTodoCompleted={toggleTodoCompleted}
        clearCompleted={clearCompleted}
        filter={'All'}
        setFilter={setFilter}
      />
    );

    expect(
      screen.getByRole('heading', { level: 2, name: 'What needs to be done?' })
    ).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Show All tasks' }));
    userEvent.click(screen.getByRole('button', { name: 'Show Active tasks' }));
    userEvent.click(screen.getByRole('button', { name: 'Show Completed tasks' }));
    expect(screen.getByRole('button', { name: 'Show All tasks' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show Active tasks' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show Completed tasks' })).toBeInTheDocument();
  });
});
