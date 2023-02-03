import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Title } from './titles';

describe('Given Title component', () => {
  const mockTitle = 'Test';
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Title('slot', mockTitle);
    expect(element).toBeInstanceOf(Title);
  });

  test('should be in the document', () => {
    const h2 = screen.getByRole('heading', { name: mockTitle });
    expect(h2).toBeInTheDocument();
  });
});
