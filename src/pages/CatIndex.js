import React from "react"

const Catindex= ({cats}) => {
    console.log(cats)
return (
    <main>
        {cats.map((cat, index) => {
            return (
                <>
                <div key={cat.id}>
                <img
                src={cat.image}
                alt="profile of all our cats friends"
                className="cat-profile-pic"
                />
                    <p>{cat.name}</p>
                    <p>{cat.age}</p>
                </div>
                </>
            )
        })}
    </main>
)

}
export default Catindex