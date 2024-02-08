import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../pages/Home'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      const homeText = screen.getByText("Home")
      expect(homeText).toBeInTheDocument()
    })
})
    export default Home