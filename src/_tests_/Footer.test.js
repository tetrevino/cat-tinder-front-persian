import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  it("renders a footer", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const catFooter = screen.getByRole("img")
    expect(catFooter).toHaveAttribute("src", "FooterImage.png")
    expect(catFooter).toHaveAttribute("alt", "Footer")
  })
})