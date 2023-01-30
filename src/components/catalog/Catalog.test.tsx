import { render } from '@testing-library/react';
import Catalog from './Catalog';

const mockedFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

global.fetch = mockedFetch;

test('renders component', () => {
  render(<Catalog />);
  //const text = screen.getByText(/Number of products in stock:/i);
  // expect(text).toBeInTheDocument();
});
