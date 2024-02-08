import React from "react"
import NotFoundImage from "../assets/404notfound.png"
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from "../pages/NotFound"


describe("<NotFound />", () => {
    it("renders image", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      const NoKittyImage = screen.getByRole("img")
    expect(NoKittyImage).toHaveAttribute("src", NotFoundImage)
    expect(NoKittyImage).toHaveAttribute("alt", "Footer")
    })
   })