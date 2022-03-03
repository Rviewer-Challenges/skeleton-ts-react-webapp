import { render, screen } from '@testing-library/react';
import { Header } from "./Header";

test('Header renders welcome message', () => {
  render(<Header />);
  const codeMessage = screen.getByText(/Welcome to the Rviewer React skeleton!/i);
  expect(codeMessage).toBeInTheDocument();
});
