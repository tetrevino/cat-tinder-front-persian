import React from "react"
import { NavLink as RouterNavLink } from "react-router-dom"
import { CardGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from "reactstrap"
const Catindex= ({cats}) => {
    
return (
    <main>
        {cats?.map((cat) => {
            return (
                <>
                    {/* <div key={cat.id}>
                        <img
                        src={cat.image}
                        alt="profile of all our cats friends"
                        className="cat-profile-pic"
                        />
                        <RouterNavLink to= {`/catshow/${cat.id}`}>
                        <p>{cat.name}</p>
                        <p>{cat.age}</p>
                        </RouterNavLink>
                    </div> */}


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
                        <CardTitle tag="h5">
                            {cat.name}
                        </CardTitle>
                        <CardSubtitle
                            className="cat-profile-pic"
                            tag="h6"
                        >
                            {cat.age}
                        </CardSubtitle>
                        <CardText tag="h5">
                            {cat.enjoys}
                        </CardText>
                        </CardBody>
                        </Card>
                        </CardGroup>
                </>
            )
        })}
    </main>
    )

}

export default Catindex