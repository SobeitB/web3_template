import { screen, render } from '@testing-library/react';
import { List } from './List';
import '@testing-library/jest-dom';

const items = ['ccs', 'html', 'js'];

describe('List components', () => {
  it('List renders', () => {
    render(<List items={items} />);

    expect(screen.getByTestId('html')).toBeInTheDocument();
  });
});
