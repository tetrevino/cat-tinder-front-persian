import { render, screen } from "@testing-library/react"
import CatNew from "../pages/CatNew.js"
import { BrowserRouter } from "react-router-dom"


describe("<CatNew />", ()=>{


    it ("renders without crashing", ()=>
    {
        render(
            <BrowserRouter>
              <CatNew />
            </BrowserRouter>
          )
    })
    
    it("renders a button", () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )
    
   
        const catButton = screen.getByRole('button')
        expect(catButton).toBeInTheDocument()    

    })
    
    it("renders textbox", () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )
        const textBox = screen.getByPlaceholderText(/enter your cat's name/i)
        expect(textBox).toBeInTheDocument()
    })
})