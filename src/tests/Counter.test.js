// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  <Counter/>
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const header = screen.getByText('Counter');
  expect(header).toHaveTextContent('Counter');
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByText('0');
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByText('0');
  const plus = screen.getByRole('button', { name: '+' });
  userEvent.click(plus);
  expect(count).toHaveTextContent('1');;
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByText('0');
  const minus = screen.getByRole('button', { name: '-' });
  userEvent.click(minus);
  expect(count).toHaveTextContent('-1');
});
