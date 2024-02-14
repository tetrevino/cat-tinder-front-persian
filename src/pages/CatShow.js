import React from "react"
import { useParams, NavLink as RouterNavLink } from "react-router-dom"
import '../App.css'; 
import { CardGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap"


const CatShow = ({ cats }) => {
    const { id } = useParams()
    const cat = cats.find((item) => item.id === +id)
  
    return (
       <CardGroup>
            <Card>
                <RouterNavLink to= {`/catshow/${cat.id}`}>  
                <CardImg
                alt="profile of all our cats friends"
                src={cat.image}
                top-width="100%"
                />
                </RouterNavLink>
                <CardBody>
                <CardTitle tag="h3">
                    {cat.name}
                </CardTitle>
                <CardSubtitle
                    className="cat-profile-pic"
                    tag="h6"
                >
                    <h5>Age: {cat.age}</h5>
                </CardSubtitle>
                <CardText tag="h5">
                <h5>Enjoys: {cat.enjoys}</h5>
                </CardText>
                </CardBody>
            </Card>
       </CardGroup> 
      
    )
  }
  
  export default CatShow