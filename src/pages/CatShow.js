import React from "react"
import { useParams, NavLink as RouterNavLink } from "react-router-dom"
import '../App.css'; 
import { CardGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap"


const CatShow = ({ cats }) => {
    const { id } = useParams()
    const cat = cats.find((item) => item.id === +id)
  
    return (
    //   <div className="container">
    //     <div className="text-container">
    //       <h3>CatShow component</h3>
    //       <img
    //         src={cat?.image}
    //         alt="profile of all our cats friends"
    //         className="cat-profile-pic"
    //       />
    //       <p>{cat?.name}</p>
    //       <p>{cat?.age}</p>
    //       <p>{cat?.enjoys}</p> 
    //       <RouterNavLink to={`/catedit/${cat?.id}`} className="nav-link">
    //       <p>Edit {cat?.name}</p>
    //       </RouterNavLink>
    //     </div>

    //   </div>
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