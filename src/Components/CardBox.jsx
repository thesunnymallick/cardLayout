import React from 'react'

function CardBox({ fname, lname, email, img }) {

    return (
        <div className="cardBox">
            <img src={img} alt={fname} />
            <h4>{email}</h4>
            <h3>{fname} {lname}</h3>

        </div>

    )
}

export default CardBox