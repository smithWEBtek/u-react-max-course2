import { render, screen, fireEvent } from '@testing-library/react';
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

  test('renders correct paragraph text before button click', () => {
    render(<Greeting />)
    const greetingElement = screen.getByText("It's good to see you!", { exact: false })
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders correct paragraph text after button click', () => {
    // Arrange
    render(<Greeting />)
    // Act: click button
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement)
    // Assert
    const outputElement = screen.getByText('Changed!', { exact: false })
    expect(outputElement).toBeInTheDocument();
  });

  // test('does not render default paragraph after button click', () => {
  //   render(<Greeting />)
  //   const buttonElement = screen.getByRole('button');
  //   const greetingElement = screen.getByText("It's good to see you!", { exact: false })
  //   fireEvent.click(buttonElement)

  //   expect(greetingElement).not.toBeInTheDocument()
  // });

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange    
    render(<Greeting />)
    // Act    
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement)
    const outputElement = screen.queryByText('good to see you', { exact: false })
    // Assert
    // expect(outputElement).not.toBeInTheDocument();
    expect(outputElement).toBeNull();
  });
});
