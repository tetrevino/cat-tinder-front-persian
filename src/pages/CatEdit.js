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
      const handleChange = () =>
      {
        updateCat(editCat, cat?.id)
        navigate(`/catshow/${cat?.id}`)
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