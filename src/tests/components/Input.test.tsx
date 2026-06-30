import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../../shared/ui/Input';

describe('Input Component', () => {
  it('renders input with correct label', () => {
    render(<Input label="Email Address" placeholder="you@example.com" />);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument();
  });

  it('renders validation error message correctly', () => {
    render(<Input label="Email Address" error="Invalid email address" />);
    const errorEl = screen.getByTestId('input-error');
    expect(errorEl).toBeInTheDocument();
    expect(errorEl).toHaveTextContent('Invalid email address');
  });

  it('connects label and input via id', () => {
    render(<Input label="Username" id="user-input" />);
    const input = screen.getByLabelText('Username');
    expect(input).toHaveAttribute('id', 'user-input');
  });
});
