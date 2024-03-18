import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '@/app/dashboard/[city]/page';
import '@testing-library/jest-dom';

/**
 * Verify the functionality and rendering behavior of the Dashboard.
 *
 * Mocks:
 * - Next.js Router: Mocked to simulate navigation and router state without triggering actual navigation
 *   events or changing the URL during tests.
 *
 * Test Suite:
 *
 * 1. Error Handling for Non-existent City
 *    - Ensures that an error message is displayed when an invalid city name is provided.
 *
 * 2. Successful Display of Weather Information
 *    - Confirms that the Dashboard correctly renders weather information for a valid city.
 **/

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

describe('Dashboard', () => {
    it('displays error message for invalid path', () => {
        render(<Dashboard params={{ city: 'NotACity' }} />);
        waitFor(() => {
            expect(screen.getByText('Invalid City. Please try again')).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('displays location details for correct path', () => {
        render(<Dashboard params={{ city: 'Vancouver' }} />);
        waitFor(() => {
            expect(screen.getByText('Vancouver, British Columbia, Canada')).toBeInTheDocument();
            expect(screen.getByTestId('current-weather-card')).toBeInTheDocument();
            expect(screen.getByTestId('hourly-day-card')).toBeInTheDocument();
            expect(screen.getByTestId('seven-day-card')).toBeInTheDocument();
            expect(screen.getByTestId('fourteen-day-card')).toBeInTheDocument();
        }, { timeout: 3000 });

    })
});