import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render correctly', () => {
    const { getByText  } = render(<App />);
    const homeElem = getByText(/About/g)
    expect(homeElem).toBeInTheDocument();
  });
})