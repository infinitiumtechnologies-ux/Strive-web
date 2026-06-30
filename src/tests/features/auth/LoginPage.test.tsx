import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

describe('LoginPage Integration', () => {
  beforeEach(() => {
    useAuthStore.getState().logout();
  });

  it('renders login form and can submit successfully', async () => {
    const user = userEvent.setup();

    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByText('Welcome Back')).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const submitBtn = screen.getByRole('button', { name: /sign in/i });

    await user.type(emailInput, 'demo@strivewheels.com');
    await user.type(passwordInput, '123456');
    await user.click(submitBtn);

    // Wait for the button loading state to appear during submit process
    await waitFor(() => {
      expect(screen.getByTestId('button-loader')).toBeInTheDocument();
    });

    // Wait for mock API call delay and verify redirect
    await waitFor(
      () => {
        expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
      },
      { timeout: 3000 },
    );

    // Verify Zustand store updated
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
    expect(useAuthStore.getState().user?.email).toBe('demo@strivewheels.com');
  });

  it('shows validation errors for invalid fields', async () => {
    const user = userEvent.setup();

    render(
      <HelmetProvider>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </HelmetProvider>,
    );

    const emailInput = screen.getByLabelText('Email Address');
    const submitBtn = screen.getByRole('button', { name: /sign in/i });

    await user.type(emailInput, 'bad-email');
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
      expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
    });
  });
});
