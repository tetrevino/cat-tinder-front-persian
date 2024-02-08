import React from "react"
import { NavLink as RouterNavLink } from "react-router-dom"
const Catindex= ({cats}) => {
    
return (
    <main>
        {cats?.map((cat) => {
            return (
                <>
                <div key={cat.id}>
                    <img
                    src={cat.image}
                    alt="profile of all our cats friends"
                    className="cat-profile-pic"
                    />
                    <RouterNavLink to= {`/catshow/${cat.id}`}>
                     <p>{cat.name}</p>
                     <p>{cat.age}</p>
                    </RouterNavLink>
                </div>
                </>
            )
        })}
    </main>
)

}
export default Catindex