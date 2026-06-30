import { render, screen, fireEvent } from '@testing-library/react';
import { FeaturedVehicles } from '../../../features/home/components/FeaturedVehicles';

describe('FeaturedVehicles Component', () => {
  it('renders section title and correct number of vehicle cards', () => {
    render(<FeaturedVehicles />);
    expect(screen.getByText('Featured Vehicles For Rent')).toBeInTheDocument();

    const cards = screen.getAllByTestId('vehicle-card');
    expect(cards).toHaveLength(6);
  });

  it('renders vehicle specifications in card items', () => {
    render(<FeaturedVehicles />);
    expect(screen.getByText('Toyota Camry / Sedan')).toBeInTheDocument();
    expect(screen.getByText('Volvo Luxury Coach Bus')).toBeInTheDocument();
    expect(screen.getByText(/\$50/)).toBeInTheDocument();
    expect(screen.getAllByText('4 Seats')[0]).toBeInTheDocument();
  });

  it('opens confirmation modal on clicking rent now button', () => {
    render(<FeaturedVehicles />);
    const rentBtns = screen.getAllByRole('button', { name: /rent now/i });

    fireEvent.click(rentBtns[0]);

    expect(screen.getByTestId('rent-confirm-modal')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirm rental/i })).toBeInTheDocument();
  });
});
