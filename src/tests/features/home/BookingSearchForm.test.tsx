import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingSearchForm } from '../../../features/home/components/BookingSearchForm';

describe('BookingSearchForm Component', () => {
  it('renders default input fields and placeholders', () => {
    render(<BookingSearchForm />);
    expect(screen.getByLabelText(/pick-up location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/drop-off location/i)).toBeInTheDocument();
    expect(screen.getByTestId('search-submit')).toBeInTheDocument();
  });

  it('renders validation errors when submitting with empty location inputs', async () => {
    const user = userEvent.setup();
    render(<BookingSearchForm />);

    const pickupInput = screen.getByLabelText(/pick-up location/i);
    const dropInput = screen.getByLabelText(/drop-off location/i);
    const submitBtn = screen.getByTestId('search-submit');

    await user.clear(pickupInput);
    await user.clear(dropInput);
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('pickup-error')).toHaveTextContent('Pick-up location is required');
      expect(screen.getByTestId('drop-error')).toHaveTextContent('Drop-off location is required');
    });
  });

  it('submits successfully without opening a modal', async () => {
    const user = userEvent.setup();
    render(<BookingSearchForm />);

    const roundTripBtn = screen.getByRole('button', { name: /round trip/i });
    await user.click(roundTripBtn);

    const pickupInput = screen.getByLabelText(/pick-up location/i);
    const dropInput = screen.getByLabelText(/drop-off location/i);
    const pickupDateInput = screen.getByLabelText(/^date$/i);
    const dropDateInput = screen.getByLabelText(/return date/i);
    const submitBtn = screen.getByTestId('search-submit');

    await user.clear(pickupInput);
    await user.type(pickupInput, 'Dallas Airport');
    await user.clear(dropInput);
    await user.type(dropInput, 'Downtown Hotel');

    await user.clear(pickupDateInput);
    await user.type(pickupDateInput, '2026-07-10');
    await user.clear(dropDateInput);
    await user.type(dropDateInput, '2026-07-15');

    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('button-loader')).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(screen.queryByTestId('button-loader')).not.toBeInTheDocument();
        expect(screen.queryByTestId('search-success-modal')).not.toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
