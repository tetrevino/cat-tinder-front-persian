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
    
   
        const catButton = screen.getByRole('button', {
            name: /submit/i
        })
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

    it("renders an age button", () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )
        const ageButton = screen.getByRole('spinbutton')
        expect(ageButton).toBeInTheDocument()
    })

    it("renders a textbox for the enjoys field", () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )
        const enjoysBox = screen.getByPlaceholderText(/enter what your cat likes to do/i)
        expect(enjoysBox).toBeInTheDocument()
    })

    it("renders an h3 element", () => {
        render(
           <BrowserRouter>
                <CatNew />
           </BrowserRouter> 
        )
        const headingText = screen.getByRole('heading', {
            name: /add your cat info to make new cat friends/i
        })
        expect(headingText).toBeInTheDocument()

    })
})