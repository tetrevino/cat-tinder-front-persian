import React from "react"
import { useParams, NavLink as RouterNavLink } from "react-router-dom"
import '../App.css'; 

const CatShow = ({ cats }) => {
    const { id } = useParams()
    const cat = cats.find((item) => item.id === +id)
  
    return (
      <div className="container">
        <div className="text-container">
          <h3>CatShow component</h3>
          <img
            src={cat?.image}
            alt="profile of all our cats friends"
            className="cat-profile-pic"
          />
          <p>{cat?.name}</p>
          <p>{cat?.age}</p>
          <p>{cat?.enjoys}</p>
        <button>  
          <RouterNavLink to={`/catedit/${cat?.id}`} className="nav-link">
          <p>Edit {cat?.name}</p>
          </RouterNavLink>
        </button>
        </div>
      </div>
    )
  }
  
  export default CatShow