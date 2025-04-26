import { describe, it, expect, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterButton from './filter-button';

describe('<FilterButton />', () => {
  it('is first test', () => {
    const setFilter = vitest.fn();

    render(
      <FilterButton
        name={'All'}
        isPressed={true}
        setFilter={setFilter}
      />
    );

    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/All/i)).toBeInTheDocument();
  });
});
