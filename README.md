# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Test for character limit
<!-- #    it("enjoys has a character limit", () => {
        
        render(
        <BrowserRouter>
            <CatNew cats={mockCats} />
        </BrowserRouter>
        )
        const catEnjoysLength = screen.getByPlaceholderText(/enter what/i)
        expect(catEnjoysLength).toEqual ({ minLength:10})
      })
     -->





     import React, { useState } from "react"
import { FormGroup, Input, Label, Form } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const CatEdit = ({cats, updateCat}) => {
    const { id } = useParams()
    let cat = cats?.find((cat) => cat.id === +id)
    
    const navigate = useNavigate ()

    const [editCat, setEditCat] = useState({
      name: cat?.name,
      age: cat?.age,
      enjoys: cat?.enjoys,
      image: cat?.image
    })
    const handleChange = (e) => {
      updateCat(editCat, cat.id)
      navigate(`/catshow/${cat.id}`)
    }

return (
    <>
        <h1>Cat Edit</h1>
            <Form>
        <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
                data-testid = "name"
                type="text" 
                name="name" 
                value={editCat.name}
                onChange={(e) => setEditCat({ ...editCat, name: e.target.value })}
                />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="age">Age</Label>
            <Input 
                data-testid = "age"
                type="number" name="age" 
                value={editCat.age}
                onChange={(e) => setEditCat({ ...editCat, age: e.target.value })}
                />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="enjoys">Enjoys</Label>
            <Input 
                data-testid = "enjoys"
                type="text" name="enjoys" 
                value={editCat.enjoys}
                    onChange={(e) => setEditCat({ ...editCat, enjoys: e.target.value })}
                />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="image">Image URL</Label>
            <Input 
                data-testid = "image"
                type="text" name="image" 
                value={editCat.image}
                    onChange={(e) => setEditCat({ ...editCat, image: e.target.value })}
                />
        </FormGroup>
        </Form>
        <button onClick = {handleChange}> Submit </button>
    </>
    )
}

export default CatEdit













  // const updateCat = (cat) => {
  //   fetch(`http://localhost:3000/cats/${cat.id}`, {
  //     body: JSON.stringify(cat),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'PATCH',
  //   })
  //     .then((response) => response.json())
  //     .then(() => readCat())
  //     .catch((errors) => console.log('Cat update errors:', errors));
  // }