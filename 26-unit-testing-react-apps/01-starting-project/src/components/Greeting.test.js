import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('description of category: Greeting Component', () => {
  test('renders Hello World as a text', () => {
    // 3 things, three A's
    // arrange: setup test conditions and environment
    render(<Greeting />)
    // act: do the thing you want to test, run logic
    // ..nothing

    // assert: compare execution results
    const helloWorldElement = screen.getByText('Hello World!')
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('paragraph greeting text', () => {
    render(<Greeting />)
    const greetingElement = screen.getByText(/It's good to see you!/)
    expect(greetingElement).toBeInTheDocument();
  });
});
