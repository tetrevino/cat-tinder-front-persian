import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

describe("<App />", () => {
  it("renders an h1 text", () => {
    // Arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
)});
