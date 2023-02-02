import { Header } from './header';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Given Header component', () => {
  const mockTitle = 'Test';
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Header);
  });

  test('should be in the document', () => {
    const h1 = screen.getByRole('heading', { name: mockTitle });
    expect(h1).toBeInTheDocument();
  });
});
