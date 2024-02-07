import { render, screen } from '@testing-library/react'
import React from 'react'
import Header from '../components/Header'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    //   const catHeader = screen.getByRole("img")
//   expect(catHeader).toHaveAttribute("src", "HeaderImage.png")
//   expect(catHeader).toHaveAttribute("alt", "Header")
    })
})
    export default Header